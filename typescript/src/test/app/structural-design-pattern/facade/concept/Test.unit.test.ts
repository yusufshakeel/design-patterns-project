import SubsystemA from '../../../../../app/structural-design-pattern/facade/concept/SubsystemA';
import { FacadeA } from '../../../../../app/structural-design-pattern/facade/concept/FacadeA';
import { FacadeB } from '../../../../../app/structural-design-pattern/facade/concept/FacadeB';
import SubsystemB from '../../../../../app/structural-design-pattern/facade/concept/SubsystemB';

describe('Testing facade - concept', () => {
  test('Should be able to use facadeA', () => {
    const subsystemA = new SubsystemA();
    const facadeA = new FacadeA(subsystemA);
    expect(facadeA.action()).toStrictEqual({ subsystemA: 'SubsystemA did something...' });
  });

  test('Should be able to use facadeB', () => {
    const subsystemA = new SubsystemA();
    const subsystemB = new SubsystemB();
    const facadeB = new FacadeB(subsystemA, subsystemB);
    expect(facadeB.action()).toStrictEqual({
      subsystemA: 'SubsystemA did something...',
      subsystemB: 'SubsystemB did something...'
    });
  });
});