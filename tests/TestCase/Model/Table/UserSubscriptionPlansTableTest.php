<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\UserSubscriptionPlansTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\UserSubscriptionPlansTable Test Case
 */
class UserSubscriptionPlansTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\UserSubscriptionPlansTable
     */
    public $UserSubscriptionPlans;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.user_subscription_plans',
        'app.users',
        'app.user_types',
        'app.provider_types',
        'app.specialities',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.user_logs',
        'app.consumer_billing_details',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('UserSubscriptionPlans') ? [] : ['className' => 'App\Model\Table\UserSubscriptionPlansTable'];
        $this->UserSubscriptionPlans = TableRegistry::get('UserSubscriptionPlans', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->UserSubscriptionPlans);

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
