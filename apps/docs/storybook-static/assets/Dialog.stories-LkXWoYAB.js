import { R as e } from "./index-ZH-6pyQh.js";
import {
	D as o,
	b as i,
	a as t,
	c,
	d as s,
	e as g,
	f as u,
	g as D,
	I as r,
} from "./index-BcQ5mm-j.js";
import "./_commonjsHelpers-CqkleIqs.js";
import "./index-jyNdYUlS.js";
import "./index-DVyBTwwr.js";
const S = { title: "Primitives/Dialog", component: o, tags: ["autodocs"] },
	a = {
		render: () =>
			e.createElement(
				o,
				null,
				e.createElement(
					i,
					{ asChild: !0 },
					e.createElement(t, null, "Open Dialog")
				),
				e.createElement(
					c,
					null,
					e.createElement(
						s,
						null,
						e.createElement(g, null, " City "),
						e.createElement(u, null, " Select a city ")
					),
					e.createElement(D, null, "Dialog")
				)
			),
	},
	l = {
		render: () =>
			e.createElement(
				o,
				null,
				e.createElement(
					i,
					{ asChild: !0 },
					e.createElement(t, { variant: "danger" }, "Delete Account")
				),
				e.createElement(
					c,
					null,
					e.createElement(
						s,
						null,
						e.createElement(g, null, "Are you sure?"),
						e.createElement(
							u,
							null,
							"This action cannot be undone. This will permanently delete your account."
						)
					),
					e.createElement(
						D,
						null,
						e.createElement(t, { variant: "outline" }, "Cancel"),
						e.createElement(t, { variant: "danger" }, "Delete")
					)
				)
			),
	},
	n = {
		render: () =>
			e.createElement(
				o,
				null,
				e.createElement(
					i,
					{ asChild: !0 },
					e.createElement(t, { variant: "primary" }, "Open")
				),
				e.createElement(
					c,
					null,
					e.createElement(
						s,
						null,
						e.createElement(g, null, "Create Account"),
						e.createElement(u, null, "Fill in your details below")
					),
					e.createElement(
						"div",
						{ className: "flex flex-col gap-4" },
						e.createElement(r, { label: "Username" }),
						e.createElement(r, { label: "Email" }),
						e.createElement(r, { label: "Password" })
					),
					e.createElement(
						D,
						null,
						e.createElement(t, { variant: "outline" }, "Cancel"),
						e.createElement(t, { variant: "success" }, "Submit")
					)
				)
			),
	};
var m, d, p;
a.parameters = {
	...a.parameters,
	docs: {
		...((m = a.parameters) == null ? void 0 : m.docs),
		source: {
			originalSource: `{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> City </DialogTitle>
          <DialogDescription> Select a city </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          Dialog
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,
			...((p = (d = a.parameters) == null ? void 0 : d.docs) == null
				? void 0
				: p.source),
		},
	},
};
var E, C, v;
l.parameters = {
	...l.parameters,
	docs: {
		...((E = l.parameters) == null ? void 0 : E.docs),
		source: {
			originalSource: `{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,
			...((v = (C = l.parameters) == null ? void 0 : C.docs) == null
				? void 0
				: v.source),
		},
	},
};
var T, B, y;
n.parameters = {
	...n.parameters,
	docs: {
		...((T = n.parameters) == null ? void 0 : T.docs),
		source: {
			originalSource: `{
  render: () => <Dialog>
            <DialogTrigger asChild>
                <Button variant='primary'>Open</Button>
            </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Create Account
                </DialogTitle>
                <DialogDescription>
                    Fill in your details below
                </DialogDescription>
            </DialogHeader>
            <div className='flex flex-col gap-4'>
                <Input label='Username' />
                <Input label='Email' />
                <Input label='Password' />
            </div>
            <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="success">Submit</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
}`,
			...((y = (B = n.parameters) == null ? void 0 : B.docs) == null
				? void 0
				: y.source),
		},
	},
};
const w = ["DialogDefault", "Destructive", "DialogWihtForm"];
export {
	l as Destructive,
	a as DialogDefault,
	n as DialogWihtForm,
	w as __namedExportsOrder,
	S as default,
};
