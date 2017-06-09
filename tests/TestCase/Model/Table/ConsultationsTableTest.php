<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ConsultationsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ConsultationsTable Test Case
 */
class ConsultationsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ConsultationsTable
     */
    public $Consultations;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.consultations',
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
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.consumer_billing_details',
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.patient_insurances',
        'app.providers'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Consultations') ? [] : ['className' => 'App\Model\Table\ConsultationsTable'];
        $this->Consultations = TableRegistry::get('Consultations', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Consultations);

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
