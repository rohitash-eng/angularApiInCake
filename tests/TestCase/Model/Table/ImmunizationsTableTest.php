<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ImmunizationsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ImmunizationsTable Test Case
 */
class ImmunizationsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ImmunizationsTable
     */
    public $Immunizations;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.immunizations',
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
        'app.patient_insurances',
        'app.patients',
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms',
        'app.forms_issue_types',
        'app.consultations',
        'app.consumer',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.products',
        'app.specialities',
        'app.provider_types',
        'app.forums',
        'app.age_groups',
        'app.comments',
        'app.coupons_specialities',
        'app.consumer_billing_details',
        'app.provider',
        'app.inquiry_types',
        'app.inquiries',
        'app.clients'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Immunizations') ? [] : ['className' => 'App\Model\Table\ImmunizationsTable'];
        $this->Immunizations = TableRegistry::get('Immunizations', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Immunizations);

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