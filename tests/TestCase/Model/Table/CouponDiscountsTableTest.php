<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\CouponDiscountsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\CouponDiscountsTable Test Case
 */
class CouponDiscountsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\CouponDiscountsTable
     */
    public $CouponDiscounts;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.coupon_discounts',
        'app.consultations',
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
        'app.subscription_plans',
        'app.coupons_products',
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
        'app.patient_parents',
        'app.patient_authorization_forms',
        'app.gaurantor_informations',
        'app.patient_medical_histories',
        'app.issues',
        'app.issue_types',
        'app.forms',
        'app.forms_issue_types',
        'app.patient_insurances',
        'app.consumer',
        'app.inquiry_types',
        'app.inquiries'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('CouponDiscounts') ? [] : ['className' => 'App\Model\Table\CouponDiscountsTable'];
        $this->CouponDiscounts = TableRegistry::get('CouponDiscounts', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->CouponDiscounts);

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
