<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\BannersTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\BannersTable Test Case
 */
class BannersTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\BannersTable
     */
    public $Banners;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.banners',
        'app.pages',
        'app.page_categories',
        'app.faqs'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Banners') ? [] : ['className' => 'App\Model\Table\BannersTable'];
        $this->Banners = TableRegistry::get('Banners', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Banners);

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
