<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PatientNotesAndDocumentTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PatientNotesAndDocumentTable Test Case
 */
class PatientNotesAndDocumentTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\PatientNotesAndDocumentTable
     */
    public $PatientNotesAndDocument;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.patient_notes_and_document',
        'app.patients',
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
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.patient_insurances',
        'app.issue_types',
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
        $config = TableRegistry::exists('PatientNotesAndDocument') ? [] : ['className' => 'App\Model\Table\PatientNotesAndDocumentTable'];
        $this->PatientNotesAndDocument = TableRegistry::get('PatientNotesAndDocument', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->PatientNotesAndDocument);

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
