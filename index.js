/**
 * Author: Alexandre Chabeau
 * License: MIT
 * Contact: alexandrechabeau.pro@gmail.com
 * Original repos: https://github.com/saucyspray/split-text
 */

class SplitText {
    constructor(_target) {
        this.result = new Object()

        // Save original text
        this.result.originalText = _target.innerText

        // Split text
        this.result.splitted = this.split(_target)

        // Bind returning object
        this.result.words = this.result.splitted.querySelectorAll('.wrapper')
        this.result.chars = this.result.splitted.querySelectorAll('.char')
        this.result.spaces = this.result.splitted.querySelectorAll('.spacer')

        // Return object
        return this.result
    }

    // Returns a span wich already has display: inline-block, so we can animate easely
    createSpan(_class) {
        let span = document.createElement('span')
        span.style.display = "inline-block"
        span.className = _class

        return span
    }

    // The core of the class
    split(_target) {

        let containerArray = new Array
        const splittedTarget = _target.innerText.split(' ')
        let counter = splittedTarget.length

        splittedTarget.map(word => {

            // Create a wrapper span to contain each letter span
            const wrapper = this.createSpan('wrapper')

            word.split(/(?!^)/).map(char => {
                // Create a span for each letter
                let el = this.createSpan('char')
                // Letter is set as span innerText
                el.innerText = char
                // Append the letter to his wrapper span
                wrapper.appendChild(el)
            })

            // Decrease counter so we know how many words need to be splitted
            counter--

            // Append wrapper to array
            containerArray.push(wrapper)

            // Add a space if there is at least one word left to be splitted (avoid space at the end of a sentence)
            if (counter > 0) {
                let space = this.createSpan('char spacer')
                space.innerHTML = '&nbsp;'
                containerArray.push(space)
            }
        })

        // Reset the target inner HTML
        _target.innerHTML = ''

        // Append new splitted text
        containerArray.forEach(child => {
            _target.appendChild(child)
        })

        return _target
    }
}

const cooltext = new SplitText(document.querySelector('.text'))

console.log(cooltext)

/**
 * Uncomment when publish new version
 */
// export default SplitText