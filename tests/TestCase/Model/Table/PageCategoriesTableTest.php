<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PageCategoriesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PageCategoriesTable Test Case
 */
class PageCategoriesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\PageCategoriesTable
     */
    public $PageCategories;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.page_categories'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('PageCategories') ? [] : ['className' => 'App\Model\Table\PageCategoriesTable'];
        $this->PageCategories = TableRegistry::get('PageCategories', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->PageCategories);

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
