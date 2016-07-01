---
title: A Simple SCSS Architecture, and Best Practice Playbook
tags: [scss, architecture, best, practice, structure, playbook, simple, sass]
image: scss_playbook.png
---

Here is a quick start playbook that covers the absolute basics of pulling together various 

I have spent a lot of time looking at different Sass/Scss formatting, naming, and architecture standards. The bible probably being Hugo Giraudel's [Sass Guidelines](https://sass-guidelin.es/#about-the-author) - Although very comprehensive, well maintained, and well written the standards were a little too thorough for my needs.

So, I decided to write my own playbook that covers Scss file structure standards - I will probably add to this as I go. 

# Scss Playbook
___

## File Structure

- Categorized styles; making them easier to maintain
- 5-1 Pattern architecture; for clearer organization (based on the [7-1 Pattern](https://github.com/HugoGiraudel/sass-boilerplate))
- Clear delineation between grouped and associated rules
- Encourages common style, components and variable (inline with [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/))
- Modular style management that facilitates [Styleguide Driven Development](http://webuild.envato.com/blog/styleguide-driven-development/)
- Reusable approach


{% highlight awk %}{% raw %}
scss/                               # Import all ‘-dir.scss’ files
|
|- abstracts/                   
|	|- __abstracts-dir.scss     # Import all abstracts .scss files
|	|- _fonts.scss              # Font Import
|	|- _mixins.scss             # Scss Mixins
|	|- _variables.scss          # Scss Variables
|
|- base/
|	|- __base-dir.scss          # Import all base .scss files
|	|- _reset.scss              # Custom Reset/Normalize
|	|- _typography.scss         # Typography Rules
|	…                           # Etc.
|
|- components/
|	|- __components-dir.scss    # Import all components .scss files
|	|- _button.scss             # Button Styles
|	|- _input.scss              # Input Styles
|	|- _modal.scss              # Modal Styles
|	…	                    # Etc.
|
|- layouts/
|	|- __layouts-dir.scss       # Import all layouts .scss files
|	|- _footer.scss             # Footer Styles
|	|- _main-navigation.scss    # Main Navigation Styles
|	…                           # Etc.
|
|- vendor/
|	|- __vendor-dir.scss        # Import vendor folders
|	|- bourbon/                 # Bourbon
|	|- fontawesome/             # Font Awesome
|	|- neat/                    # Bourbon Neat
|	|- normalize/               # Normalize
|	…                           # Etc.
|
`styles.scss                        # Main Scss File
{% endraw %}{% endhighlight %}

___

## styles.scss

- Charset should be included
- Only directory files `-dir.scss` files should be imported
- Changes should not be made to this file
- Filename is always ‘styles’ as it is a compiled file containing multiple stylesheets
- All files except /styles.scss require an underscore at the beginning of each filename

##### styles.scss 

{% highlight scss %}{% raw %}

@charset 'utf-8';

//Vendor
@import "vendor/__vendor-dir";

//Abstracts
@import "abstracts/__abstracts-dir";

//Base Styles
@import "base/__base-dir";

//Components
@import "components/__components-dir"; Test test test

//Layout
@import "layouts/__layouts-dir";

{% endraw %}{% endhighlight %}

___

## Vendors

- All 3rd-party vendor tools (frameworks, libraries, helpers) should be separated into folders
- Only the 3rd-party master file for each vendor tool should be imported
- One `@import` per line
- Vendor tool version number should be included in an inline comment
- The following are imported as standard: 
  - [bourbon.io](bourbon.io)
  - [neat.bourbon.io](neat.bourbon.io)
  - [fontawesome.io](fontawesome.io)
  - [github.com/necolas/normalize.css/](github.com/necolas/normalize.css/)

##### __vendors-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all vendor imports.
*/

//Import Vendor files
@import "bourbon/bourbon"; //4.2.6
@import "neat/neat"; //1.7.2
@import "fontawesome/font-awesome"; //4.4.0
@import "normalize/normalize"; //3.0.3
//Additonal Vendor Tools

{% endraw %}{% endhighlight %}

___

## Abstracts

- Helper functions and non–output snippets only (font-face imports, reusable mixins, global variables, colors, etc.)
- One `@import` per line
- The following files are imported as standard ready for customization: 
  - `_fonts.scss`
  - `_mixins.scss`
  - `_variables.scss`
- Abstracts should be grouped with an inline comment title
- One abstract per line
- C-style comments can be used to add context
- Files with no data should not be removed

##### __abstracts-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all abstracts imports.
Files inside this folder can contain abstract settings, helpers or functions. They have no direct output.
*/

//Import Abstracts files
@import "fonts";
@import "mixins";
@import "variables";

{% endraw %}{% endhighlight %}

##### _fonts.scss

{% highlight scss %}{% raw %}

//Font Imports
@include font-face("Open Sans", "../fonts/open-sans/OpenSans-Light", 300, $file-formats: ttf);

{% endraw %}{% endhighlight %}

##### _variables.scss 

{% highlight scss %}{% raw %}

//Variables

//Colors
$red: #EF4B46;
$blue: dodgerblue;
$yellow: rgba(239, 181, 67, 1);

{% endraw %}{% endhighlight %}

___

## Base

- Global styles are imported here
- A custom reset file can be added to override normalize
- Typography (`h1-6`, `p`, `a`, `blockquote`, etc.) should be included
- Globally defined tags (`body`, `main`, `article`, `div`, etc.) should also be included
- One `@import` per line
- The following files are imported as standard ready for customization: 
  - `_reset.scss`
  - `_typography.scss`
- Additional base stylesheets can be imported 


##### __base-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all base imports.
Files inside this folder can contain global styles used in the project.
*/

//Import Base files
@import "reset";
@import "typography";
//Additonal Base Stylesheets

{% endraw %}{% endhighlight %}

___

## Components

- Micro level reusable components are imported here
- Each component does one thing and one thing only
- Components are re-usable across the project
- Components are independent
- One `@import` per line
- Each stylesheet contains all component styles, variations and states


##### __components-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all component imports.
Files inside this folder should contain all styles relating to a reusable component.
*/

//Import Component files
@import "button";
@import "input";
@import "modal";
//Additonal Component Stylesheets

{% endraw %}{% endhighlight %}

##### _button.scss 

{% highlight scss %}{% raw %}

//Button
.btn {
  display: block;
  color: $red;
  border-color: transparent;

  &:disabled, 
  &.disabled {  
    pointer-events: none;
  }
}

//Alternate Button
.btn.alt {
  color: $blue;
}

{% endraw %}{% endhighlight %}

___

## Layouts

- Unique combinations of components and base styles are imported here
- One `@import` per line
- Each stylesheet contains all component style overrides, and specific layout only attributes


##### __layouts-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all component imports.
Files inside this folder can contain specific element styles and layout. 
*/

//Import Layout files
@import "main-navigation";
@import "footer";
//Additonal Layouts Stylesheets

{% endraw %}{% endhighlight %}

##### _footer.scss 

{% highlight scss %}{% raw %}

//Footer
footer {
  @include display(flex);
  @include justify-content(space-between);
  width: 100%;

  &.dark {
    background: rgba(0,0,0,1);  
  }
}

//Footer Buttons
footer .btn {  
  @include flex(0 0 auto);
  color: $red; 
}

{% endraw %}{% endhighlight %}

___

## Additional Stylesheets

- Ensure additional stylesheets are added in the appropriate folder and imported correctly in the directories `-dir.scss` file.


##### __components-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all component imports.
Files inside this folder should contain all styles relating to a reusable component.
*/

//Import Component files
@import "button";
@import "input";
@import "modal";
@import "accordion";
@import "dropdown";
@import "carousel";
@import "form";
@import "icon";
@import "label";

{% endraw %}{% endhighlight %}

##### __layouts-dir.scss 

{% highlight scss %}{% raw %}

/*
This file is used to contain all component imports.
Files inside this folder can contain specific element styles and layout. 
*/

//Import Layout files
@import "main-navigation";
@import "footer";
@import "sidebar";
@import "masthead";

{% endraw %}{% endhighlight %}

___

## Writing Rules
- Two (2) spaces indents, no tabs
- Single line whitespace between rules
- No more than 2 levels of nesting
- Structure for each element is as follows:
  - Style the element itself
  - Style the element’s variants, modifiers, and states
  - Styles the element’s descendants (i.e. children)

##### _footer.scss 

{% highlight scss %}{% raw %}

//Footer
footer {
  @include display(flex);
  @include justify-content(space-between);
  width: 100%;

  &.dark {
    background: rgba(0,0,0,1);  
  }

  .container {
    padding: 1em;
  }
}

//Footer Buttons
footer .btn {  
  @include flex(0 0 auto);
  color: $red; 
}

//Footer Copyright Message
footer .copyright {  
  text-align: center; 
}

{% endraw %}{% endhighlight %}


___

## Commenting
- CSS rules that aren’t obvious should be commented 
- C-style comments should be utilized for a large block of text
- Inline (C++-style) comments should be utilized for single line comments
- No comments should appear in a production environment – All CSS should be minified, stripping comments in the process, before being deployed.

{% highlight scss %}{% raw %}

// This element will move when it’s parent is active

/*
This file is used in all instances of a button
Colors used within the button.scss file are defined here
*/

{% endraw %}{% endhighlight %}