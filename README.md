# SwipeAxisXCarousel

### Thumbnails hover carousel plugin without dependencies. Based on [Brazzers-Carousel](https://github.com/agragregra/Brazzers-Carousel-Repo/) logick.


### View [demo](demo/index.html)


## How to use this plugin

1.  Plug in minified CSS file (if you want to use your own styles - you can skip this step and go to step 2):

```html
<link rel="stylesheet" href="dist/css/SwipeAxisXCarousel.min.css">
```

2. Plug in minified JS file: 

```html
<script href="dist/js/SwipeAxisXCarousel.min.js"></script>
```

3. Add HTML Markup with images like in the example (element tag and class name may be vary):

```html
<span class="items">
	<img src="img/image-1.jpg" alt="Alt">
	<img src="img/image-2.jpg" alt="Alt">
	<img src="img/image-3.jpg" alt="Alt">
</span>
```

4. Call the plugin:

```html
<script>
    new SwipeAxisXCarousel('.items');
</script>
```

Or if you want to use your own styles - you can set class names as options, such as:

```html
<script>
new SwipeAxisXCarousel('.items', {
        activeClass: 'active-item',
        rootClass: 'item-root-wrapper',
        thumbWrapperClass: 'item-thumb-wrapper',
        thumbWrapperTableClass: 'item-thumb-wrapper__table',
        imageWrapperClass: 'item-image-wrapper',
    });
</script>
```