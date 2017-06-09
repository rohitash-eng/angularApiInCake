<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\BlogsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\BlogsTable Test Case
 */
class BlogsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\BlogsTable
     */
    public $Blogs;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.blogs',
        'app.user_types',
        'app.users',
        'app.provider_types',
        'app.specialities',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.user_logs',
        'app.user_subscription_plans',
        'app.consumer_billing_details'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Blogs') ? [] : ['className' => 'App\Model\Table\BlogsTable'];
        $this->Blogs = TableRegistry::get('Blogs', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Blogs);

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
