<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'table',
  data() {
    return {
      form4: [0],
      dic: [
        {
          label: '选项1',
          value: 0,
          children: [
            {
              label: '选项3',
              value: 2,
            },
            {
              label: '选项4',
              value: 3,
            },
          ],
        },
        {
          label: '选项2',
          value: 1,
        },
      ],
    };
  },
};
</script>
