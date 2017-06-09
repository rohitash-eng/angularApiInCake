<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\InsurancePlansTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\InsurancePlansTable Test Case
 */
class InsurancePlansTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\InsurancePlansTable
     */
    public $InsurancePlans;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.insurance_plans',
        'app.states',
        'app.plan_types',
        'app.plans',
        'app.trading_partners'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('InsurancePlans') ? [] : ['className' => 'App\Model\Table\InsurancePlansTable'];
        $this->InsurancePlans = TableRegistry::get('InsurancePlans', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->InsurancePlans);

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
