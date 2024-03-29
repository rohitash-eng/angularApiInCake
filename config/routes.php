<?php

/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
use Cake\Core\Plugin;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

/**
 * The default class to use for all routes
 *
 * The following route classes are supplied with CakePHP and are appropriate
 * to set as the default:
 *
 * - Route
 * - InflectedRoute
 * - DashedRoute
 *
 * If no call is made to `Router::defaultRouteClass()`, the class used is
 * `Route` (`Cake\Routing\Route\Route`)
 *
 * Note that `Route` does not do any inflections on URLs which will result in
 * inconsistently cased URLs when used with `:plugin`, `:controller` and
 * `:action` markers.
 *
 */
Router::defaultRouteClass('DashedRoute');
Router::extensions(['json']);
Router::scope('/', function (RouteBuilder $routes) {
    /**
     * Here, we are connecting '/' (base path) to a controller called 'Pages',
     * its action called 'display', and we pass a param to select the view file
     * to use (in this case, src/Template/Pages/home.ctp)...
     */
    $routes->connect('/', ['controller' => 'Pages', 'action' => 'display', 'home']);

    
    /**
     * ...and connect the rest of 'Pages' controller's URLs.
     */
    //$routes->connect('/pages/*', ['controller' => 'Pages', 'action' => 'display']);
    $routes->connect('/Pages/*', ['controller' => 'Pages', 'action' => 'pageView']);
    $routes->connect('/pages/*', ['controller' => 'Pages', 'action' => 'pageView']);
    $routes->connect('/pages/providerPage/*', ['controller' => 'Pages', 'action' => 'providerPage']);
    $routes->connect('/pages/catpages/:slug', ['controller' => 'Pages', 'action' => 'catPages'],[
        'pass' => ['slug'],
        'slug' => '\b[a-zA-Z0-9_-]+'
    ]);
    $routes->connect('/pages/getProviderTypes', ['controller' => 'Pages', 'action' => 'getProviderTypes']);
    $routes->connect('/pages/getProviderTypes/:id', ['controller' => 'Pages', 'action' => 'getProviderTypes']);
    $routes->connect('/pages/providerTypePage/:id', ['controller' => 'Pages', 'action' => 'providerTypePage']);
    $routes->connect('/pages/getDataByProviderType/:id', ['controller' => 'Pages', 'action' => 'getDataByProviderType']);
    $routes->connect('/pages/getMenuBySlug/:slug', ['controller' => 'Pages', 'action' => 'getMenuBySlug']);
    $routes->connect('/pages/getPageBySlug', ['controller' => 'Pages', 'action' => 'getPageBySlug']);
    /**
     * Connect catchall routes for all controllers.
     *
     * Using the argument `DashedRoute`, the `fallbacks` method is a shortcut for
     *    `$routes->connect('/:controller', ['action' => 'index'], ['routeClass' => 'DashedRoute']);`
     *    `$routes->connect('/:controller/:action/*', [], ['routeClass' => 'DashedRoute']);`
     *
     * Any route class can be used with this method, such as:
     * - DashedRoute
     * - InflectedRoute
     * - Route
     * - Or your own route class
     *
     * You can remove these routes once you've connected the
     * routes you want in your application.
     */
    //$routes->connect('/:controller/:action.json', [], ['routeClass' => 'DashedRoute']);
    $routes->fallbacks('DashedRoute');
});

Router::prefix('admin', function($routes) {
    // All routes here will be prefixed with `/admin`
    // And have the prefix => admin route element added.
    //$routes->connect('/', ['controller' => 'Specialities', 'action' => 'index']);
    $routes->connect('/', ['controller' => 'Users', 'action' => 'login']);
    $routes->connect('/:controller', ['action' => 'index'], ['routeClass' => 'DashedRoute']);
    $routes->connect('/:controller/:action/*', [], ['routeClass' => 'DashedRoute']);
});
/**
 * Load all plugin routes.  See the Plugin documentation on
 * how to customize the loading of plugin routes.
 */
Plugin::routes();
