<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\UserLogsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\UserLogsTable Test Case
 */
class UserLogsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\UserLogsTable
     */
    public $UserLogs;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.user_logs',
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
        $config = TableRegistry::exists('UserLogs') ? [] : ['className' => 'App\Model\Table\UserLogsTable'];
        $this->UserLogs = TableRegistry::get('UserLogs', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->UserLogs);

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
