<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProviderLicenseAndInsurancesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProviderLicenseAndInsurancesTable Test Case
 */
class ProviderLicenseAndInsurancesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProviderLicenseAndInsurancesTable
     */
    public $ProviderLicenseAndInsurances;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.provider_license_and_insurances',
        'app.users',
        'app.user_types',
        'app.provider_types',
        'app.user_logs',
        'app.user_profiles',
        'app.states',
        'app.plan_types',
        'app.plans'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ProviderLicenseAndInsurances') ? [] : ['className' => 'App\Model\Table\ProviderLicenseAndInsurancesTable'];
        $this->ProviderLicenseAndInsurances = TableRegistry::get('ProviderLicenseAndInsurances', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProviderLicenseAndInsurances);

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
