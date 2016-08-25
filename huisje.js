/*jslint browser:true */
/*global riot:true, $:true */
(function () {
    'use strict';
    $('[href]').click(function (e) {
        var path = $(this).attr('href');
        if (path.split('-')[0] !== '#carousel') {
            riot.route(path);
        }
    });
    riot.route(function (path) {
        var view = path.slice(1) === "" ? "huisje" : path.slice(1);
        $('.pure-menu-selected').removeClass('pure-menu-selected');
        $('section:visible').attr('hidden', true);
        $('#' + view + '-text').removeAttr('hidden');
        $('#' + view + '-photos').removeAttr('hidden');
        $('a[href=#' + view + ']').parent('li').addClass('pure-menu-selected');
    });          
}());