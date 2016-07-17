/*
The MIT License (MIT)

Copyright (c) 2016 UsulPro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

define(function (require, exports, module) {

    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus");


    var link = require.toUrl("gray.css");
    var style = document.createElement("link");
    style.type = "stylesheet/text-css";
    style.rel = "stylesheet";
    style.href = link;
    style.id = "nothemeStyle";

    document.querySelector("head").appendChild(style);

    function handleGrayStyle() {
        var style = document.getElementById('nothemeStyle');
        var link = require.toUrl("gray.css");
        style.href = link;
        return false;
    }


    var SET_GRAY_ID = "usulpro.contrastscrollbar.grayStyle";

    var isExtentionEnabled = CommandManager.register("Contrast scrollbar", SET_GRAY_ID, function () {
    if (!this.getChecked()) {
        this.setChecked(true);

        style.href = link;
    } else {
        this.setChecked(false);

        style.href = '';
    }
  });
    isExtentionEnabled.setChecked(true);

    var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(SET_GRAY_ID);

});
