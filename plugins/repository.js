import Repository from '~/repository'

export default function (context, inject) {
  inject('repo', new Repository(context))
}
