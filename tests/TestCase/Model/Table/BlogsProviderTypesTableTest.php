<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\BlogsProviderTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\BlogsProviderTypesTable Test Case
 */
class BlogsProviderTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\BlogsProviderTypesTable
     */
    public $BlogsProviderTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.blogs_provider_types',
        'app.blogs',
        'app.user_types',
        'app.users',
        'app.groups',
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
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.consumer_billing_details',
        'app.blogs_specialities'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('BlogsProviderTypes') ? [] : ['className' => 'App\Model\Table\BlogsProviderTypesTable'];
        $this->BlogsProviderTypes = TableRegistry::get('BlogsProviderTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->BlogsProviderTypes);

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
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
