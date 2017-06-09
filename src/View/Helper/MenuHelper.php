<?php

namespace App\View\Helper;

use Cake\View\Helper;
use Cake\Utility\Hash;
use Cake\Utility\Inflector;

/**
 * Description of MenuHelper
 *
 * @author kiwitech
 */
class MenuHelper extends Helper {

    public $helpers = ['Html', 'Url'];

    /**
     * The Menu Builder generates the menu links for a website navagation, including generating dropdowns
     * buildMenu Method
     * 
     * @param  array $loadMenu
     * @param  array $options
     * @return void
     */
    public function build($loadMenu = [], $options = [],$depth=0) {
        if (!$loadMenu) {
            return false;
        }
        $regexUrl = '/http/';
        $currentUrl = rtrim($this->request->here,'/');
        
        foreach ($loadMenu as $mkey => $menu) {            
            $liOptions = [];
            $linkOptions = [];
            $activeClass = '';
            if (empty($menu['url'])) {
                $menuLink = '';
                $link = 'javascript:void(0);';
            } else {
                $link = $menu['url'];
                $menuLink = $this->Url->build($menu['url']);
            }

            if (!empty($menu['liclass'])) {
                $liOptions['class'] = $menu['liclass'];
            } else {
                $liOptions['class'] = '';
            }
            if (!empty($menu['class'])) {
                $linkOptions['class'] = $menu['class'];
            } else {
                $linkOptions['class'] = 'list-group-item';
            }

            $linkOptions['data-parent'] = '#MainMenu';
            if(isset($menu['preg'])){
                $regexUrl = '/'.preg_quote($menu['preg'],'/').'/';
            }
            if ($currentUrl == $menuLink || (isset($menu['preg']) && preg_match($regexUrl, $currentUrl))) {
                $linkOptions['class'] = $linkOptions['class'] . ' active';
            }

            if (!empty($menu['children'])) {
                if($menu['liclass'] == 'navigation'){
                    $rootParent = $menu['title'];
                }
                if ($this->urlExist($menu['children']) || (isset($menu['preg']) && preg_match($regexUrl, $currentUrl))) {
                    $activeClass = ' in';
                }

                $linkOptions['data-parent'] = '#MainMenu';
                $linkOptions['data-toggle'] = 'collapse';                
                $linkOptions['class'] = ($activeClass == '') ? $linkOptions['class'].' collapsed success' : $linkOptions['class'].' success';
                $link = '#' . \Cake\Utility\Inflector::slug($menu['title']) . '_' . $depth;
            }

            $linkOptions['title'] = $menu['title'];
            echo $this->Html->tag('li', null, $liOptions);
            echo $this->Html->link($menu['title'], $link, $linkOptions);
            if (!empty($menu['children'])) {
                echo '<ul class="collapse menuList' . $activeClass . '" id="' . \Cake\Utility\Inflector::slug($menu['title']) . '_' . $depth . '">';
                $options['children']['liclass'] = "";
                //$options['children']['currentkey'] = $depth+1;
                
                $this->build($menu['children'], $options,++$depth);
                echo '</ul>';
            }
            echo '</li>';
        }
        if (!empty($options['dropdown'])) {
            echo '</ul>';
        }
        $depth++;
    }

    public function urlExist($url) {
        $childURL = $this->flatten($url);
        $here = rtrim($this->request->here,'/');
        foreach ($childURL as $key => $link) {
            if ($link == $here) {
                return true;
            }
        }
        return false;
    }

    function flatten($array, $op = '') {
        $result = [];
        foreach ($array as $key => $value) {
            $result[] = empty($value['url']) ? "" : $this->Url->build($value['url']);
            if (!empty($value['children'])) {
                $result = array_merge($result, $this->flatten($value['children']));
            }
        }
        return array_values(array_filter($result));
    }
}
