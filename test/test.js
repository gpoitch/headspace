import Headspace from '../dist/headspace'
import assert from 'assert'

describe('Server-side', () => {
  it('doesn\'t crash when imported', () => {
    assert.ok(Headspace)
    assert.doesNotThrow(Headspace)
  })

  it('doesn\'t throw when instantiated', () => {
    assert.doesNotThrow(Headspace)
  })
})

describe('Creation', () => {
  it('can create instances with `new`', () => {
    assert.ok(new Headspace() instanceof Headspace)
  })
  it('can create instances via factory method', () => {
    assert.ok(Headspace() instanceof Headspace)
  })
})

describe('Options', () => {
  it('applies zero number and boolean options correctly', () => {
    const headspace = new Headspace(null, {
      startOffset: 0,
      tolerance: 0,
      showAtBottom: false
    })

    assert.strictEqual(headspace.startOffset, 0)
    assert.strictEqual(headspace.tolerance, 0)
    assert.strictEqual(headspace.showAtBottom, false)
  })
})

describe('Compatibility', () => {
  const origPrototype = Headspace.prototype

  afterEach(() => {
    Headspace.prototype = origPrototype
  })

  it('allows new-ish browser features to be polyfilled', (done) => {
    Headspace.prototype.addClass = function () {
      return 'foo'
    }
    Headspace.prototype.removeClass = function () {
      return 'bar'
    }
    Headspace.prototype.debounce = function (callback) {
      callback('baz')
    }

    const headspace = new Headspace()
    assert.equal(headspace.addClass(), 'foo')
    assert.equal(headspace.removeClass(), 'bar')
    headspace.debounce(function (result) {
      assert.equal(result, 'baz')
      done()
    })
  })
})
