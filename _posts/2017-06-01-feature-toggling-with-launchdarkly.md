---
layout: post
title: Feature Toggling with LaunchDarkly
date: 2017-06-01
author: v.thong
categories: c# launchdarkly feature-flag
description: How to use LaunchDarkly feature flag to enable or disable functionalities in C# application
---


Feature toggle is a software development technique allowing developers to modify system behaviour during run time without code change<sup>[[1]](https://martinfowler.com/articles/feature-toggles.html)</sup>. Feature toggle is used to enable or disable features. This way some features can be enabled for testing even before they are ready for release and disabled in production.

LaunchDarkly is a feature flag rather than a feature toggle<sup>[[2]](https://launchdarkly.com/featureflags.html)</sup>. A toggle implies a two-state condition while a flag can return multiple states or values. In this blog I'm just going to show you how to use LaunchDarkly as a feature toggle to keep things simple. 


# Project environments
By default LaunchDarkly provides 2 environments, Production and Test. This can be managed in <b>Account settings</b>
<img src="/assets/images/post-images/launchdarkly-accountSettings.png" alt="account-settings" style="width: 60%; max-width: 350px; display: block; margin: 0 auto" />


# Feature flags
Create a new feature flag by entering:
<ul>
    <li>Name</li>
    <li>Key</li>
    <li>Description (optional)</li>
    <li>Flag type</li>
</ul> 

Note that Key is generated automatically as we type in Name. We can alter this if we're not happy with the auto generated Key. Before saving the flag, please make sure you're happy with the Key representation. As far as I'm aware, there's no way we can edit the Key once the flag is  created. We will need to delete the whole flag and create a new one with the desirable Key representation. The Key is important here as it is going to be used in your application.  
<img src="/assets/images/post-images/launchdarkly-createFeatureFlag.png" alt="create-feature-flag" style="width: 60%; max-width: 350px; display: block; margin: 0 auto" />


# Using LaunchDarkly in your C# application

<ol>
<li>First thing you need to do is install LaunchDarkly SDK using NuGet in the appropriate project of your C# solution.</li>

```csharp
    Install-Package LaunchDarkly.Client
```

<li> Import the LaunchDarkly package to your class.</li>

```csharp
    using LaunchDarkly.Client;
```

<li>Create a new LdClient with your environment-specific SDK key. I'm using Production SDK key here.</li>

```csharp
    var client = new LdClient("sdk-359e3cfa-6eb3-49c6-aa09-99e54a3880e9");
```

<li>Create a user. I'm only interested in the user name and machine name. You can adjust this according to your need.</li>

```csharp
    var user = User.WithKey(System.Environment.UserName)
                   .AndSecondaryKey(System.Environment.MachineName);
```

<li>Retrieve LaunchDarkly toggle value.</li>

```csharp
    var isEnabled = client.BoolVariation("calc-scenario-mappings-crud-buttons", user);
```

<code>isEnabled</code> returns <code>true</code> if the feature flag is switched ON and returns <code>false</code> if the feature flag is switched OFF.
<img src="/assets/images/post-images/launchdarkly-featureFlagOnOff.png" alt="feature-flag-on-off" style="width: 60%; max-width: 350px; display: block; margin: 0 auto" />


<li>Use this <code>isEnabled</code> value where you want to enable or disable features in your application.</li>
I'm using LaunchDarkly in CALC to disable the CRUD buttons in Scenario Mappings screen. I already have a view model that decides whether the CRUD buttons need to be enabled or disabled, so all I need to do is just append this boolean value to the existing logic.
</ol>

# Dev console and run result
Dev console is a handy event listener, it'll show events as they stream in, live. Have this console open before you run your application.

I'll run CALC with feature flag first switched OFF and then switched ON so we can see the different effects. 

On the left tab, we see that when the flag is switched OFF, the CRUD buttons are all disabled. On the right tab, when the flag is switched ON, the CRUD buttons are enabled.
<img src="/assets/images/post-images/launchdarkly-calc.png" alt="calc" style="width: 60%; max-width: 350px; display: block; margin: 0 auto" />

Dev console shows the following when the flag is switched OFF
<img src="/assets/images/post-images/launchdarkly-devConsoleFlagOff.png" alt="devconsole-flag-off" style="width: 60%; max-width: 350px; display: block; margin: 0 auto" />

When flag is switched ON
<img src="/assets/images/post-images/launchdarkly-devConsoleFlagOn.png" alt="devconsole-flag-on" style="width: 60%; max-width: 350px; display: block; margin: 0 auto" />

Note that the reason why the Dev console show 2 events is because we have 2 tab items (Index and Curve) in the Scenario Mappings screen.


