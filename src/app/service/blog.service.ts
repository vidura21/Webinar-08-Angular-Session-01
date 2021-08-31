import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogs: Blog[] = [
    {
      id: 1,
      title: 'Get start with Angular',
      date: new Date(),
      imgUrl:
        'https://www.closette.it/wp-content/uploads/2018/05/IMG_8353ls.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint dolore, magnam deleniti expedita enim, ratione dicta iusto cumque reprehenderit aut amet excepturi consequuntur, voluptate tenetur vitae maxime ipsum! Quisquam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      rate: 1
    },
    {
      id: 2,
      title: 'Serverless API with Node.js',
      date: new Date(),
      imgUrl:
        'https://raccontodigitale.it/wp-content/uploads/2017/12/Come-fare-foto-dallalto-per-Instagram-1024x668.jpg',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint dolore, magnam deleniti expedita enim, ratione dicta iusto cumque reprehenderit aut amet excepturi consequuntur, voluptate tenetur vitae maxime ipsum! Quisquam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      rate: 0
    },
    {
      id: 3,
      title: 'AWS for beginners',
      date: new Date(),
      imgUrl:
        'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint dolore, magnam deleniti expedita enim, ratione dicta iusto cumque reprehenderit aut amet excepturi consequuntur, voluptate tenetur vitae maxime ipsum! Quisquam. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      rate: 5
    },
  ];

  constructor() { }
}
