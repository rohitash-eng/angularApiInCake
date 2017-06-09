<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProviderProfilesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProviderProfilesTable Test Case
 */
class ProviderProfilesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProviderProfilesTable
     */
    public $ProviderProfiles;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.provider_profiles',
        'app.users',
        'app.user_types',
        'app.provider_types',
        'app.user_logs',
        'app.user_profiles',
        'app.provider_license_and_insurances',
        'app.states',
        'app.specialities'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ProviderProfiles') ? [] : ['className' => 'App\Model\Table\ProviderProfilesTable'];
        $this->ProviderProfiles = TableRegistry::get('ProviderProfiles', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProviderProfiles);

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
