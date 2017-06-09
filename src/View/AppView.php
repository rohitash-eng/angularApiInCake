<?php

/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link      http://cakephp.org CakePHP(tm) Project
 * @since     3.0.0
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */

namespace App\View;

use Cake\View\View;

/**
 * Application View
 *
 * Your application’s default view class
 *
 * @link http://book.cakephp.org/3.0/en/views.html#the-app-view
 */
class AppView extends View {

    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading helpers.
     *
     * e.g. `$this->loadHelper('Html');`
     *
     * @return void
     */
    public function initialize() {
        parent::initialize();
        $this->loadHelper('Menu');
        //$this->loadHelper('Editor');
        
    }
    
    /**
     * treehelper method
     * 
     */
    public function treeNode($data){
        if(empty($data)){
            return;
        }
        $tree = '<ul class="list-unstyled">';
        $tree .= $this->buildTree($data);
        $tree .= '</ul>';
        return $tree;
    }
    
    public function buildTree($data,$label=0,$tree = ''){
        
        foreach($data as $item){
            $params = json_decode($item['params'],true);
            $callback = (!empty($params['callback']))?$params['callback']:"";
            $param = (!empty($params['param']))?$params['param']:"";
            
            //$prefix = str_repeat(' - ', $label);
            $prefix = 'level-'.$label;
            $tree .= '<li class="'.$prefix.'"><label class="control control--checkbox">'
                    . '<input type="checkbox" name="page" value="'.$item->label.'" data-url="'.$item->url.'" data-title="'.$item->title.'" data-callback="'.$callback.'" data-param="'.$param.'" class="allpages">'
                   // . '<span class="muted">'.$prefix.'</span>'
                    . '<span class="dynamic-content ">'.$item->title.'</span>'
                    . '<span class="control__indicator"></span>'
                    . '</label></li>';
            
            if($item->has('children')){
                $tree .= $this->buildTree($item['children'],$label+1);
            }
        }
        return $tree;
    }
    
    public function nestableData($data = []){
        if(empty($data)){
            return;
        }
        $items = [];
        foreach($data as $item){
            if(empty($item['children'])){
                unset($item['children']);
            }
            unset($item['parent_id']);
            unset($item['id']);
            $params = json_decode($item['params'],true);
            unset($item['params']);
            $item['callback'] = !empty($params['callback'])?$params['callback']:'';
            $item['param'] = !empty($params['param'])?$params['param']:'';
            
            $items[] = $item;
            if(!empty($item['children'])){
                $this->nestableData($item['children']);
                
            }
            
        }
        return json_encode($items);
    }

}
