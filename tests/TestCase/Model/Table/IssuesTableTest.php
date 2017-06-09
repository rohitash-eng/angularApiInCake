<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\IssuesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\IssuesTable Test Case
 */
class IssuesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\IssuesTable
     */
    public $Issues;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.issues',
        'app.issue_types',
        'app.patient_medical_histories',
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
        'app.user_subscription_plans',
        'app.consumer_billing_details',
        'app.patients',
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.patient_insurances'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Issues') ? [] : ['className' => 'App\Model\Table\IssuesTable'];
        $this->Issues = TableRegistry::get('Issues', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Issues);

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
