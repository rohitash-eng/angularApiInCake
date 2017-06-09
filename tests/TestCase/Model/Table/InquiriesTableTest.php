<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\InquiriesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\InquiriesTable Test Case
 */
class InquiriesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\InquiriesTable
     */
    public $Inquiries;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.inquiries',
        'app.inquiry_types'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Inquiries') ? [] : ['className' => 'App\Model\Table\InquiriesTable'];
        $this->Inquiries = TableRegistry::get('Inquiries', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Inquiries);

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

    /**
     * Test getInquiryDropDown method
     *
     * @return void
     */
    public function testGetInquiryDropDown()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test generateDropdowns method
     *
     * @return void
     */
    public function testGenerateDropdowns()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test getDropdownsByFields method
     *
     * @return void
     */
    public function testGetDropdownsByFields()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
