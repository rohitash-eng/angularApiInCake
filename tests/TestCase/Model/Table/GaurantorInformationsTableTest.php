<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\GaurantorInformationsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\GaurantorInformationsTable Test Case
 */
class GaurantorInformationsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\GaurantorInformationsTable
     */
    public $GaurantorInformations;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.gaurantor_informations',
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
        $config = TableRegistry::exists('GaurantorInformations') ? [] : ['className' => 'App\Model\Table\GaurantorInformationsTable'];
        $this->GaurantorInformations = TableRegistry::get('GaurantorInformations', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->GaurantorInformations);

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
