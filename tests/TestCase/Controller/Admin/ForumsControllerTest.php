<?php
namespace App\Test\TestCase\Controller\Admin;

use App\Controller\Admin\ForumsController;
use Cake\TestSuite\IntegrationTestCase;

/**
 * App\Controller\Admin\ForumsController Test Case
 */
class ForumsControllerTest extends IntegrationTestCase
{

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.forums',
        'app.provider_types',
        'app.specialities',
        'app.provider_profiles',
        'app.users',
        'app.groups',
        'app.user_types',
        'app.user_logs',
        'app.user_subscription_plans',
        'app.subscription_plans',
        'app.coupons',
        'app.subsciption_plans',
        'app.coupons_subsciption_plans',
        'app.consumer_billing_details',
        'app.provider_license_and_insurances',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.trading_partners',
        'app.comments'
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
