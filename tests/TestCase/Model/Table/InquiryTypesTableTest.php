<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\InquiryTypesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\InquiryTypesTable Test Case
 */
class InquiryTypesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\InquiryTypesTable
     */
    public $InquiryTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.inquiry_types',
        'app.inquiries'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('InquiryTypes') ? [] : ['className' => 'App\Model\Table\InquiryTypesTable'];
        $this->InquiryTypes = TableRegistry::get('InquiryTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->InquiryTypes);

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
     * Test getInquiryTypes method
     *
     * @return void
     */
    public function testGetInquiryTypes()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test getExistingInquiryTypes method
     *
     * @return void
     */
    public function testGetExistingInquiryTypes()
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
