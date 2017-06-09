<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\SpecialitiesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\SpecialitiesTable Test Case
 */
class SpecialitiesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\SpecialitiesTable
     */
    public $Specialities;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.specialities',
        'app.provider_types',
        'app.users',
        'app.user_types',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.insurance_plans',
        'app.insurance_plan_types',
        'app.provider_license_and_insurances',
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
        $config = TableRegistry::exists('Specialities') ? [] : ['className' => 'App\Model\Table\SpecialitiesTable'];
        $this->Specialities = TableRegistry::get('Specialities', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Specialities);

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
