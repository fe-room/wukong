/*
 * @Author: your name
 * @Date: 2021-08-06 11:23:14
 * @LastEditTime: 2021-08-06 11:27:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wukong/packages/stylelint-config/index.js
 */
module.exports = {
    extends: ['stylelint-config-standard','stylelint-config-prettier'],
    rules: {
        'no-descending-specificity': null,
        'selector-pseudo-element-no-unknown': [
            true,
            {
              ignorePseudoElements: ['v-deep'],
            },
          ],
          'selector-pseudo-class-no-unknown': [
            true,
            {
              ignorePseudoClasses: ['deep'],
            },
          ],
    }
}