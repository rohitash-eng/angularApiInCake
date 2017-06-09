<?php
namespace App\Test\TestCase\Controller;

use App\Controller\PatientMedicalHistoriesController;
use Cake\TestSuite\IntegrationTestCase;

/**
 * App\Controller\PatientMedicalHistoriesController Test Case
 */
class PatientMedicalHistoriesControllerTest extends IntegrationTestCase
{

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
     * Test index method
     *
     * @return void
     */
    public function testIndex()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test view method
     *
     * @return void
     */
    public function testView()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test add method
     *
     * @return void
     */
    public function testAdd()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test edit method
     *
     * @return void
     */
    public function testEdit()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test delete method
     *
     * @return void
     */
    public function testDelete()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
