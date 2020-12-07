# Jackie R. Gleason UI

This is my personal ui framework. 

## Intro

I wanted my UI framework to be Pure JS because I had no need for Typing. I am using Rollup becuase I think it is a great alternative to Babel and Webpack. Web Components were key and I wanted these to be isolated using ShadowDom. I also wanted to be able to "package" components in a single directory with native file-types.

## Getting started

Add 
    
    <script src="//unpkg.com/@jrg/ui/target/jrg-ui.esm.mjs" type="module"></script>
    
To your existing site. Then start declaring components...

    <jrg-top-bar-fixed></jrg-top-bar-fixed>
    <div class="jrg-wrapper-main">
      <jrg-splash></jrg-splash>
      <jrg-sidebar url="/site.config.json"></jrg-sidebar>
    </div>

## Building

First install using `npm install`. Next to build run `npm run rollup`. Finally, to host the library locally use `npm start`.