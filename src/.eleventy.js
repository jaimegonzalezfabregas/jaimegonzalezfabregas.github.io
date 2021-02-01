module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('scripts')

    return {
        passthroughFileCopy: true
    }
}