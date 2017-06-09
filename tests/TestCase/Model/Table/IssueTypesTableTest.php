<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\IssueTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\IssueTypesTable Test Case
 */
class IssueTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\IssueTypesTable
     */
    public $IssueTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.issue_types',
        'app.issues',
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
        $config = TableRegistry::exists('IssueTypes') ? [] : ['className' => 'App\Model\Table\IssueTypesTable'];
        $this->IssueTypes = TableRegistry::get('IssueTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->IssueTypes);

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
}
