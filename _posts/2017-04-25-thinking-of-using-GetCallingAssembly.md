---
layout: post
title: Thinking of Using GetCallingAssembly? Be careful
date: 2017-04-25
author: v.thong
categories: cardano javascript c#
description: Just another lessons learned the hard way when trying to publish CALC Service to UAT
---

When trying to run a RESTful WCF service in UAT environment, we had a runtime error saying that an embedded resource could not be loaded. We didn't have this problem locally and also not in DEV environment. We spent hours trying to replicate the problem locally. Running it in Debug mode worked fine, the exception seemed to only happen in Release mode. What made it worse was when we built a Release version and tried to debug that version, it worked fine. This must be a configuration issue, something must have changed recently that broke the UAT publish. Long story short, we managed to narrow it down to the combination of the enabling of the '<b>Optimize code</b>' check box in Visual Studio (which was not there in the previous UAT publish) and the use of <code>GetCallingAssembly()</code> in the assembly that has the embeded resource.

# So what does 'Optimize code' do and why doesn't it work well with GetCallingAssembly()?
As it names says, it optimizes the codes to improve performance. When code optimization is enabled, the JIT compiler moves codes around, for example it dynamically inlines some functions to increase speed. This means in runtime the optimization might change the code created by the JIT compiler, consequently returning a different assembly than what we had in mind when we decided to use <code>GetCallingAssembly()</code>. This is explained in an old MSDN documentation's [remarks](https://msdn.microsoft.com/en-us/library/system.reflection.assembly.getcallingassembly(VS.85).aspx):
> If the method that calls the <code>GetCallingAssembly()</code> method is expanded inline by the compiler (that is, if the compiler inserts the function body into the emitted Microsoft intermediate language (MSIL), rather than emitting a function call), then the assembly returned by the <code>GetCallingAssembly()</code> method is the assembly containing the inline code. This might be different from the assembly that contains the original method. To ensure that a method that calls the <code>GetCallingAssembly()</code> method is not inlined by the compiler, you can apply the <code>MethodImplAttribute</code> attribute with <code>MethodImplOptions.NoInlining</code>.


# Code inlining
According to [wikipedia](https://en.wikipedia.org/wiki/Inline_expansion):
> In computing, inline expansion, or inlining, is a manual or compiler optimization that replaces a function call site with the body of the called function

Let's illustrate this with some codes. The illustration is taken from [MSDN](https://msdn.microsoft.com/en-us/library/system.reflection.assembly.getcallingassembly) documentation.


```csharp
namespace Assembly1
{
	public Assembly Method1()
	{
		return Assembly.GetCallingAssembly();
	}
}

namespace Assembly2
{
	public Assembly Method2()
	{
		return Method1();
	}
}

namespace Assembly3
{
	public Assembly Method3()
	{
		return Method2();
	}
}
```

When <code>Method1()</code> is not inlined, <code>GetCallingAssembly()</code> returns Assembly2. <br />
When <code>Method2()</code> is not inlined, <code>GetCallingAssembly()</code> returns Assembly2. 

When <code>Method1()</code> is inlined:
```csharp
namespace Assembly3
{
	public Assembly Method3()
	{
		return Method2();
	}
}

namespace Assembly2
{
	public Assembly Method2()
	{
		return Assembly.GetCallingAssembly(); // Method1() is inlined
	}
}
```
<code>GetCallingAssembly()</code> returns Assembly3.

When <code>Method2()</code> is inlined:
```csharp
namespace Assembly3
{
	public Assembly Method3()
	{
		return Method1();  // Method2() is inlined
	}
}

namespace Assembly1
{
	public Assembly Method1()
	{
		return Assembly.GetCallingAssembly();
	}
}
```
<code>GetCallingAssembly()</code> returns Assembly3.



# Conclusion
Next time you're thinking about using <code>GetCallingAssembly()</code>, think again. Think of how it's going to be used outside of your project. Is anyone going to enable code optimization? Because if this is the case, <code>GetCallingAssembly()</code> might return unexpected assembly. There are two ways to go about this:
1. Make sure to apply <code>MethodImplAttribute</code> attribute with <code>MethodImplOptions.NoInlining</code>
2. Use <code>GetExecutingAssembly()</code> instead because it's not prone to JIT inlining



# Further readings
* [Inlining](https://en.wikipedia.org/wiki/Inline_expansion)
* [Just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation)
* [Optimizing Your Code](https://msdn.microsoft.com/en-us/library/xz7ttk5s.aspx)