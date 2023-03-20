# Developer tools

- Novice
- By: David Dias, Senior Software Engineer at HomeX
- Weight: 1
- Your score will be updated as you progress.

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/0872ca9b19e11650e355.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230320%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230320T152932Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=356861a07e59ca0b7fb3bb06a8fa170a34a19fb5d3c4dc7cd35591011d16c41e)

In this project, you will analyze this website [https://dev-tools.hbtn.info/](https://intranet.hbtn.io/rltoken/XDJc8x9X5FRGgi01_vRDkg "https://dev-tools.hbtn.info/").

## Resources

**Read or watch**:

- [Chrome DevTools | Tools for Web Developers | Google Developers](https://intranet.hbtn.io/rltoken/xQgGyibNbpXFBYkiw5Yaxg "Chrome DevTools  |  Tools for Web Developers  |  Google Developers")
- [Introduction | Down and Dirty with Chrome Developer Tools](https://intranet.hbtn.io/rltoken/G_mzqm_oYdNwGPKZge4_rA "Introduction | Down and Dirty with Chrome Developer Tools")
- [Firefox Developer Tools | MDN](https://intranet.hbtn.io/rltoken/9JR3CXVFNue4C_6820Mv4Q "Firefox Developer Tools | MDN")
- [Dev Tips - Developer Tips by Umar Hansa](https://intranet.hbtn.io/rltoken/FVe-zSoqr8JFWCSb_MIlnA "Dev Tips - Developer Tips by Umar Hansa")
- [Get Started With Viewing And Changing CSS | Tools for Web Developers](https://intranet.hbtn.io/rltoken/pFrF6Ec17k1fwgBrefnNKg "Get Started With Viewing And Changing CSS  |  Tools for Web Developers")
- [Keeping it simple with the JavaScript console - LogRocket Blog](https://intranet.hbtn.io/rltoken/sRc9bRtc24PgU7UH6Rso2Q "Keeping it simple with the JavaScript console - LogRocket Blog")
- [Inspect Network Activity - Chrome DevTools 101](https://intranet.hbtn.io/rltoken/MBiNxagRKiRQwW7jcloO_g "Inspect Network Activity - Chrome DevTools 101")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/JtuJ8tzZqLIvF3KRXsVBaA "explain to anyone"), **without the help of Google**:

### General

- What Developer Tools in your browser are
- How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.
- How to use the elements tab to edit HTML and CSS
- How to audit a page according to the tips suggested by Lighthouse
- How to create and run snippets on a page
- How to get information about files and server configurations
- How to block requests
- How to know how much JavaScript or CSS is used on a page
- How to detect 404 issues
- How to move elements on a webpage

## Requirements

### General

- A `README.md` file, at the root of the folder of the project, is mandatory
- Use the newest version of Google Chrome browser (`78.0.3904.70` or later).
- Screenshots can be taken via the OS, not necessary via the DevTools. These screenshots are used to see how and where you are doing/playing with the DevTools.

## Tasks

### 0. Responsive device

mandatory

Go to `https://dev-tools.hbtn.info/`

Take a screenshot of the website using the device toolbar Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `0-responsive_device.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21546-carousel)

Readme presents and not empty

[](https://intranet.hbtn.io/projects/2353#task-21546-carousel)

Help

**0/2** pts

### 1. Change the background color

mandatory

Go to `https://dev-tools.hbtn.info/`

Change the background-color of the body to use `#4233bd` Take a screenshot of the `PORTFOLIO` section

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `1-change_bg_color.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21547-carousel)

image shows the `PORTFOLIO` section with background color of `#4233bd`

[](https://intranet.hbtn.io/projects/2353#task-21547-carousel)

Help

**0/1** pt

### 2. Force element state

mandatory

Go to `https://dev-tools.hbtn.info/`

Force the hover state of the “cake” block in the section Portfolio Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `2-pathways_menu.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21548-carousel)

image shows `cake` with the red hover

[](https://intranet.hbtn.io/projects/2353#task-21548-carousel)

Help

**0/1** pt

### 3. Copy all the styles of the button

mandatory

Go to `https://dev-tools.hbtn.info/`

Select the `Download me!` and copy all the CSS styling that is applied on this button.

Your answer file must contain all CSS styling one per line like this example:

```
$ head -2 3-button_styles
border-radius: 1px;
color: #FF00FF;
$

```

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `3-button_styles`

Help Review your work Get a sandbox

**0/1** pt

### 4. Change button styles

mandatory

Go to `https://dev-tools.hbtn.info/`

- All primary buttons (`btn-primary`) should have the `#0080ee` color as a background color
- All outlined buttons light (`btn-outline-light`) should have `#0020aa` for the text color
- Screenshot all buttons that changed and merge it to one image

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `4-new_buttons.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21550-carousel)

All primary buttons (`btn-primary`) have `#0080ee` as background color (1 point)

[](https://intranet.hbtn.io/projects/2353#task-21550-carousel)

Help

**0/2** pts

### 5. Remove part of the website

mandatory

Go to `https://dev-tools.hbtn.info/`

Remove the `div` of the “cake” box in the section Portfolio

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `5-deleted_elements.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21551-carousel)

image shows school website without the “cake” box

[](https://intranet.hbtn.io/projects/2353#task-21551-carousel)

Help

**0/1** pt

### 6. Where is it coming from?

mandatory

Go to `https://dev-tools.hbtn.info/`

- On the right panel, click on the `Computed tab`
- Then, select the `h2` with the text `ABOUT`
- Search for `margin-bottom`

Which file is coming from that declaration?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `6-declaration_file`

Help Review your work Get a sandbox

**0/1** pt

### 7. How many listeners

mandatory

Go to `https://dev-tools.hbtn.info/`

How many times click events are referenced in JavaScript files?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `7-number_of_listeners`

Help Review your work Get a sandbox

**0/1** pt

### 8. What is the HSL code

mandatory

Go to `https://dev-tools.hbtn.info/`

Select the primary button “Send”

What is the equivalent value of the hexadecimal background-color, in HSL?

(format of your answer should be: `hsl(<VALUES>);`, example: `hsl(241, 23%, 24%);` following by a new line)

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `8-hsl`

Help Review your work Get a sandbox

**0/1** pt

### 9. The max-width of the container

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the `max-width` for the first `.container` in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%)

(format of your answer should be `max-width: <VALUE>;`, example: `max-width: 670px`)

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `9-max_width`

Help Review your work Get a sandbox

**0/1** pt

### 10. Moving around

mandatory

Go to `https://dev-tools.hbtn.info/`

Switch the section “About” and “Portfolio”

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `10-moved_around.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21556-carousel)

Section “About” is now before “Portfolio”

[](https://intranet.hbtn.io/projects/2353#task-21556-carousel)

Help

**0/1** pt

### 11. Coverage

mandatory

Go to `https://dev-tools.hbtn.info/`

How many bytes that `freelancer.css` covers?

Answer file must contain the value in Byte (example: `6144` for 6KB)

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `11-coverage`

Help Review your work Get a sandbox

**0/1** pt

### 12. Emulate the print version of the webpage

mandatory

Go to `https://dev-tools.hbtn.info/`

Take a screenshot of the homepage, only emulation the CSS print version of the website.

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `12-print_version.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21558-carousel)

image shows the print version of the webpage

[](https://intranet.hbtn.io/projects/2353#task-21558-carousel)

Help

**0/1** pt

### 13. Using the console

mandatory

Go to `https://dev-tools.hbtn.info/`

Select the Avatar image in the header and type `$0` in the console. Enter.

What does it return?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `13-logo_dollar0`

Help Review your work Get a sandbox

**0/1** pt

### 14. Write code in the console

mandatory

Go to `https://dev-tools.hbtn.info/`

Write in the console `console.log(document.title)`, what is returned?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `14-doc_title`

Help Review your work Get a sandbox

**0/1** pt

### 15. Holberton web framework

mandatory

Go to `https://dev-tools.hbtn.info/`

Which front-end framework could we guess this page is using?

In your answer file only put the letter of the multiple choice answer from below:

- A. React JS
- B. Material Design
- C. Bootstrap
- D. Angular JS

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `15-hbtn_framework`

Help Review your work Get a sandbox

**0/1** pt

### 16. Homepage weight

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the total weight of the page (with all the elements)?

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `16-weight.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21562-carousel)

image displays the total weight of the page, should be around 800KB

[](https://intranet.hbtn.io/projects/2353#task-21562-carousel)

Help

**0/1** pt

### 17. Number of requests

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the number of requests done when accessing this page?

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `17-requests.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21563-carousel)

image displays number of requests - around 25 requests

[](https://intranet.hbtn.io/projects/2353#task-21563-carousel)

Help

**0/1** pt

### 18. Number of CSS files

mandatory

Go to `https://dev-tools.hbtn.info/`

How many CSS resources are loaded on this page?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `18-css_loaded`

Help Review your work Get a sandbox

**0/1** pt

### 19. Number of images

mandatory

Go to `https://dev-tools.hbtn.info/`

How many image resources are loaded on this page?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `19-images_loaded`

Help Review your work Get a sandbox

**0/1** pt

### 20. Favicon image type

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the `type` value of the favicon image?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `20-favicon_type`

Help Review your work Get a sandbox

**0/1** pt

### 21. Font library

mandatory

Go to `https://dev-tools.hbtn.info/`

Holberton School website uses a font library for their icons, which one is it?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `21-hbtn_font_lib`

Help Review your work Get a sandbox

**0/1** pt

### 22. XHR calls

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the name of the resource that generates 1 XHR calls?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `22-xhr_calls`

Help Review your work Get a sandbox

**0/1** pt

### 23. Audits panel

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the notation for `Performance` (for desktop mode and no throttling - also called Lighthouse)?

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `23-performance_audit.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21569-carousel)

image shows the notation for performance (1 point)

[](https://intranet.hbtn.io/projects/2353#task-21569-carousel)

Help

**0/1** pt

### 24. Static assets

mandatory

Go to `https://dev-tools.hbtn.info/`

How many static assets need a better cache policy?

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `24-static_assets_audit.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21570-carousel)

image displays static assets that need a better cache policy (around 17 resources)

[](https://intranet.hbtn.io/projects/2353#task-21570-carousel)

Help

**0/1** pt

### 25. Accessibility

mandatory

Go to `https://dev-tools.hbtn.info/`

When you run an accessibility audit, what is the contrast issue?

In your answer file only put the letter of the multiple choice answer from below:

- A. Image elements do not have [alt] attributes
- B. Links do not have a discernible name
- C. Background and foreground colors do not have a sufficient contrast ratio.

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `25-contrast_issue`

Help Review your work Get a sandbox

**0/1** pt

### 26. No alt

mandatory

Go to `https://dev-tools.hbtn.info/`

Which classes are on the images that have no `alt` attribute?

Your answer file must contains all classes, example: `.my_class.my_second` if 2 classes

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `26-no_alt`

Help Review your work Get a sandbox

**0/1** pt

### 27. Best practices

mandatory

Go to `https://dev-tools.hbtn.info/`

Which attribute is missing on all the links with the target `_blank`?

In your answer file only put the letter of the multiple choice answer from below:

- A. `rel="noopener"`
- B. `rel="noreferrer"`
- C. A and B
- D. `rel = "nofollow"`

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `27-missing_attr`

Help Review your work Get a sandbox

**0/1** pt

### 28. SEO

mandatory

Go to `https://dev-tools.hbtn.info/`

Which `<a>` links don’t have enough text description?

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `28-unclear_desc.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21574-carousel)

image displays link that has text that is not descriptive enough (1 point)

[](https://intranet.hbtn.io/projects/2353#task-21574-carousel)

Help

**0/1** pt

### 29. Sources

mandatory

Go to `https://dev-tools.hbtn.info/`

The `sources` panel allow you to edit files, add breakpoints to analyse your JavaScript code and create snippets.

- Create a new snippet called `allcolors.js`
- Copy-paste the code on [that page](https://intranet.hbtn.io/rltoken/GtDwHzoJafYiYdu7b8RA4Q "that page")
- Run the code
- Take a screenshot of the result in your console

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `29-how_many_colors.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21575-carousel)

image shows result of running the snippet code, displays a list of colors (1 point)

[](https://intranet.hbtn.io/projects/2353#task-21575-carousel)

Help

**0/1** pt

### 30. Block CSS files

mandatory

Go to `https://dev-tools.hbtn.info/`

Block all CSS requests

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `30-no_css.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21576-carousel)

image displays the page with blocked CSS requests (1 point)

[](https://intranet.hbtn.io/projects/2353#task-21576-carousel)

Help

**0/1** pt

### 31. Application panel

mandatory

Go to `https://dev-tools.hbtn.info/`

The `application` panel gives you access to the storage (cookies, sessions, cache…) and some other options as Services Workers and more recently, notifications.

What is the only key present in the session storage for this page?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `31-session_storage_key`

Help Review your work Get a sandbox

**0/1** pt

### 32. Service workers

mandatory

Go to `https://dev-tools.hbtn.info/`

Does this page have any service workers? `Yes` or `No`

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `32-service_workers`

Help Review your work Get a sandbox

**0/1** pt

### 33. Security

mandatory

Go to `https://dev-tools.hbtn.info/`

The `security` panel allows you to make sure HTTS is properly implement on a webpage.

Which organization issued the SSL certificate for this page?

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `33-ssl_cert`

Help Review your work Get a sandbox

**0/1** pt

### 34. Expiration date

mandatory

Go to `https://dev-tools.hbtn.info/`

When does the SSL certificate expire?

Take a screenshot of it

**Repo:**

- GitHub repository: `holbertonschool-web_front_end`
- Directory: `developer_tools`
- File: `34-ssl_expiration.png`

Please review your task manually with the following checklist

[](https://intranet.hbtn.io/projects/2353#task-21580-carousel)

image displays when SSL certificate expires (1 point)

[](https://intranet.hbtn.io/projects/2353#task-21580-carousel)

Help
