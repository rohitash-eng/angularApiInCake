<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PatientMedicalHistoriesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PatientMedicalHistoriesTable Test Case
 */
class PatientMedicalHistoriesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\PatientMedicalHistoriesTable
     */
    public $PatientMedicalHistories;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
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
        'app.patient_insurances',
        'app.issues'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('PatientMedicalHistories') ? [] : ['className' => 'App\Model\Table\PatientMedicalHistoriesTable'];
        $this->PatientMedicalHistories = TableRegistry::get('PatientMedicalHistories', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->PatientMedicalHistories);

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

    /**
     * Test addMedicalProblems method
     *
     * @return void
     */
    public function testAddMedicalProblems()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
