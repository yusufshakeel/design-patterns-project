import Form
  from '../../../../../../app/creational-design-pattern/factory/abstract-factory/ui-component/Form';
import MacOSUIFactory
  from '../../../../../../app/creational-design-pattern/factory/abstract-factory/ui-component/MacOSUIFactory';
import WindosUIFactory
  from '../../../../../../app/creational-design-pattern/factory/abstract-factory/ui-component/WindosUIFactory';

describe('Testing abstract factory - form', () => {
  describe('Concrete factory for macOS', () => {
    test('Should be able to create family of products for macOS variant', () => {
      const form = new Form(new MacOSUIFactory());
      const uiComponent = form.uiComponent();
      expect(uiComponent.button.click()).toBe('macOS button clicked');
      expect(uiComponent.checkbox.toggle()).toBe('macOS checkbox toggled');
    });
  });

  describe('Concrete factory for Windows', () => {
    test('Should be able to create family of products for Windows variant', () => {
      const form = new Form(new WindosUIFactory());
      const uiComponent = form.uiComponent();
      expect(uiComponent.button.click()).toBe('Windows button clicked');
      expect(uiComponent.checkbox.toggle()).toBe('Windows checkbox toggled');
    });
  });
});