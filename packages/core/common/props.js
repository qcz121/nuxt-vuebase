export default function () {
  return {
    data() {
      return {
        stringMode: false,
        name: '',
        text: undefined,
        propsHttpDefault: {
          name: 'name',
          url: 'url',
          fileName: 'file',
          res: '',
        },
        propsDefault: {
          nodeKey: 'id',
          label: 'label',
          value: 'value',
          groups: 'groups',
          title: 'title',
          leaf: 'leaf',
          children: 'children',
          labelText: '名称',
          disabled: 'disabled',
        },
      };
    },
    props: {
      blur: Function,
      focus: Function,
      change: Function,
      click: Function,
      typeformat: Function,
      typeslot: {
        type: Boolean,
        default: false,
      },
      separator: {
        type: String,
        default: DIC_SPLIT,
      },
      formslot: {
        type: Boolean,
        default: false,
      },
      params: {
        type: Object,
        default: () => ({}),
      },
      listType: {
        type: String,
      },
      value: {},
      column: {
        type: Object,
        default: () => ({}),
      },
      typeslot: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: '',
      },
      tip: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      dataType: {
        type: String,
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      type: {
        type: String,
        default: '',
      },
      dicUrl: {
        type: String,
        default: '',
      },
      dicMethod: {
        type: String,
        default: '',
      },
      dicFormatter: Function,
      dicQuery: {
        type: Object,
        default: () => ({}),
      },
      dic: {
        type: Array,
        default: () => [],
      },
      placeholder: {
        type: String,
        default: '',
      },
      rules: {
        type: Array,
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      button: {
        type: Boolean,
        default: false,
      },
      group: {
        type: Boolean,
        default: false,
      },
      row: {
        type: Boolean,
        default: false,
      },
      prop: {
        type: String,
        default: '',
      },
      border: {
        type: Boolean,
        default: false,
      },
      propsHttp: {
        type: Object,
        default: () => ({
          name: 'name',
          url: 'url',
          fileName: 'file',
          res: '',
        }),
      },
      props: {
        type: Object,
        default: () => ({
          nodeKey: 'id',
          label: 'label',
          value: 'value',
          groups: 'groups',
          title: 'title',
          leaf: 'leaf',
          children: 'children',
          labelText: '名称',
          disabled: 'disabled',
        }),
      },
    },
    watch: {
      text: {
        handler(n, o) {
          this.handleChange(n);
        },
      },
      value: {
        handler(n, o) {
          this.initVal();
        },
      },
    },
    computed: {
      componentName() {
        const { type } = this.$AVUE.ui;
        const result = `${type}-${this.name}${this.button ? '-button' : ''}`;
        return result;
      },
      required() {
        return !this.validatenull(this.rules);
      },
      isArray() {
        return this.dataType === 'array';
      },
      isString() {
        return this.dataType === 'string';
      },
      isNumber() {
        return this.dataType === 'number';
      },
      nameKey() {
        return this.propsHttp.name || this.propsHttpDefault.name;
      },
      urlKey() {
        return this.propsHttp.url || this.propsHttpDefault.url;
      },
      resKey() {
        return this.propsHttp.res || this.propsHttpDefault.res;
      },
      groupsKey() {
        return this.props.groups || this.propsDefault.groups;
      },
      valueKey() {
        return this.props.value || this.propsDefault.value;
      },
      leafKey() {
        return this.props.leaf || this.propsDefault.leaf;
      },
      labelKey() {
        return this.props.label || this.propsDefault.label;
      },
      childrenKey() {
        return this.props.children || this.propsDefault.children;
      },
      disabledKey() {
        return this.props.disabled || this.propsDefault.disabled;
      },
      idKey() {
        return this.props.id || this.propsDefault.id;
      },
    },
    created() {
      this.initVal();
    },
  };
}
