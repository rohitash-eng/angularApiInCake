<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ConsumerFavouriteProvidersTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ConsumerFavouriteProvidersTable Test Case
 */
class ConsumerFavouriteProvidersTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ConsumerFavouriteProvidersTable
     */
    public $ConsumerFavouriteProviders;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.consumer_favourite_providers',
        'app.consumers',
        'app.providers'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ConsumerFavouriteProviders') ? [] : ['className' => 'App\Model\Table\ConsumerFavouriteProvidersTable'];
        $this->ConsumerFavouriteProviders = TableRegistry::get('ConsumerFavouriteProviders', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ConsumerFavouriteProviders);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
