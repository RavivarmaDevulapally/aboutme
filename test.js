QUnit.test( "TestArea", function( assert ) 
{
            var result = getpalin("AKKA","AKKA");
            assert.equal( result, " is a Palindrome", "Correct Result" );
});
         
         
QUnit.test( "TestArea", function( assert ) 
{
            var result = getpalin("rotor","rotor");
            assert.equal( result, " is a Palindrome", "Correct Result" );});

QUnit.test( "TestArea", function( assert ) 
{
            var result = getpalin("civic","civic");
            assert.equal( result, " is a Palindrome", "Correct Result" );});


QUnit.test( "TestArea", function( assert ) 
{
            var result = getpalin("racecar","racecar");
            assert.equal( result, " is a Palindrome", "Correct Result" );});

QUnit.test("TestArea", function(assert){
    var result = getpalin ("refer","refer");
    assert.equal( result, " is a Palindrome", "Correct Result" );
});