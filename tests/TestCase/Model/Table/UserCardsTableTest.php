<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\UserCardsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\UserCardsTable Test Case
 */
class UserCardsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\UserCardsTable
     */
    public $UserCards;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.user_cards',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
        'app.trading_partners',
        'app.provider_types',
        'app.specialities',
        'app.provider_settings',
        'app.consumer_profiles',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.consumer_billing_details',
        'app.stripe_cards'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('UserCards') ? [] : ['className' => 'App\Model\Table\UserCardsTable'];
        $this->UserCards = TableRegistry::get('UserCards', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->UserCards);

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
