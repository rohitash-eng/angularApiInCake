<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProviderTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProviderTypesTable Test Case
 */
class ProviderTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProviderTypesTable
     */
    public $ProviderTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.provider_types',
        'app.specialities',
        'app.users',
        'app.user_types',
        'app.user_logs',
        'app.provider_profiles',
        'app.states',
        'app.provider_license_and_insurances',
        'app.insurance_plan_types',
        'app.insurance_plans',
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
        $config = TableRegistry::exists('ProviderTypes') ? [] : ['className' => 'App\Model\Table\ProviderTypesTable'];
        $this->ProviderTypes = TableRegistry::get('ProviderTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProviderTypes);

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
}
