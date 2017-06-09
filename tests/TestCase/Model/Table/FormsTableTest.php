<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\FormsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\FormsTable Test Case
 */
class FormsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\FormsTable
     */
    public $Forms;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.forms',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.provider_types',
        'app.specialities',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
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
        $config = TableRegistry::exists('Forms') ? [] : ['className' => 'App\Model\Table\FormsTable'];
        $this->Forms = TableRegistry::get('Forms', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Forms);

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
