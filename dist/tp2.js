function is_pair(number)
{
    return ((number % 2) === 0);
}

function bonjour_concat(str)
{
    return "Bonjour, " + str;
}

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("[test]: Is the number pair:",
    function(assert) 
    {
        assert.expect(6);

        assert.notOk(is_pair(1));
        assert.ok(is_pair(2));
        assert.notOk(is_pair(3));
        assert.ok(is_pair(4));
        assert.notOk(is_pair(5));
        assert.ok(is_pair(6));
    }
);

QUnit.test("[test]: Bonjour concat:",
    function(assert)
    {
        assert.expect(3);

        assert.equal(bonjour_concat(""), "Bonjour, ");
        assert.equal(bonjour_concat("toi"), "Bonjour, toi");
        assert.equal(bonjour_concat(3), "Bonjour, 3");
    }
);
