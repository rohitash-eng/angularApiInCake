<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PatientAddressTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PatientAddressTable Test Case
 */
class PatientAddressTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\PatientAddressTable
     */
    public $PatientAddress;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.patient_address',
        'app.patients',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.provider_availabilities',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.provider_types',
        'app.specialities',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.subscription_plans',
        'app.products',
        'app.coupons_specialities',
        'app.forums',
        'app.age_groups',
        'app.comments',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.consumer_billing_details',
        'app.provider_strike',
        'app.provider',
        'app.consultations',
        'app.consumer',
        'app.inquiry_types',
        'app.inquiries',
        'app.patient_authorization_forms',
        'app.patient_parents',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms',
        'app.forms_issue_types',
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
        $config = TableRegistry::exists('PatientAddress') ? [] : ['className' => 'App\Model\Table\PatientAddressTable'];
        $this->PatientAddress = TableRegistry::get('PatientAddress', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->PatientAddress);

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
