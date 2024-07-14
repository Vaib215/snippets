'use strict';

var b = require('react');
var w = require('@radix-ui/react-radio-group');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var d = require('@radix-ui/react-accordion');
var s = require('@radix-ui/react-alert-dialog');
var st = require('@radix-ui/react-aspect-ratio');
var R = require('@radix-ui/react-avatar');
var reactDayPicker = require('react-day-picker');
var S = require('@radix-ui/react-checkbox');
var r = require('@radix-ui/react-dropdown-menu');
var i = require('@radix-ui/react-select');
var We = require('@radix-ui/react-label');
var p = require('@radix-ui/react-tabs');
var L = require('@radix-ui/react-switch');
var l = require('@radix-ui/react-toast');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var Do = require('next/image');
var A = require('react-resizable-panels');

function _interopDefault(e) { return e && e.__esModule ? e : {default : e}; }

function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
            n, k,
            d.get ? d : {enumerable : true, get : function() { return e[k]; }});
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var b__namespace = /*#__PURE__*/ _interopNamespace(b);
var w__namespace = /*#__PURE__*/ _interopNamespace(w);
var d__namespace = /*#__PURE__*/ _interopNamespace(d);
var s__namespace = /*#__PURE__*/ _interopNamespace(s);
var st__namespace = /*#__PURE__*/ _interopNamespace(st);
var R__namespace = /*#__PURE__*/ _interopNamespace(R);
var S__namespace = /*#__PURE__*/ _interopNamespace(S);
var r__namespace = /*#__PURE__*/ _interopNamespace(r);
var i__namespace = /*#__PURE__*/ _interopNamespace(i);
var We__namespace = /*#__PURE__*/ _interopNamespace(We);
var p__namespace = /*#__PURE__*/ _interopNamespace(p);
var L__namespace = /*#__PURE__*/ _interopNamespace(L);
var l__namespace = /*#__PURE__*/ _interopNamespace(l);
var Do__default = /*#__PURE__*/ _interopDefault(Do);
var A__namespace = /*#__PURE__*/ _interopNamespace(A);

function a(...e) { return tailwindMerge.twMerge(clsx.clsx(e)) }
var F = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        w__namespace.Root, {className : a("grid gap-2", e), ...t, ref : o}));
F.displayName = w__namespace.Root.displayName;
var O = b__namespace.forwardRef(({className : e, ...t},
                                 o) => jsxRuntime.jsx(w__namespace.Item, {
  ref : o,
  className : a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e),
  ...t,
  children : jsxRuntime.jsx(w__namespace.Indicator, {
    className : "flex items-center justify-center",
    children :
        jsxRuntime.jsx(lucideReact.Circle,
                       {className : "h-2.5 w-2.5 fill-current text-current"})
  })
}));
O.displayName = w__namespace.Item.displayName;
var v = classVarianceAuthority.cva(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          variants : {
            variant : {
              default :
                  "bg-primary text-primary-foreground hover:bg-primary/90",
              destructive :
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
              outline :
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
              secondary :
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              ghost : "hover:bg-accent hover:text-accent-foreground",
              link : "text-primary underline-offset-4 hover:underline"
            },
            size : {
              default : "h-10 px-4 py-2",
              sm : "h-9 rounded-md px-3",
              lg : "h-11 rounded-md px-8",
              icon : "h-10 w-10"
            }
          },
          defaultVariants : {variant : "default", size : "default"}
        }),
    U = b__namespace.forwardRef(
        ({className : e, variant : t, size : o, asChild : n = !1, ...u}, Mt) =>
            jsxRuntime.jsx(n ? reactSlot.Slot : "button", {
              className : a(v({variant : t, size : o, className : e})),
              ref : Mt,
              ...u
            }));
U.displayName = "Button";
var it = d__namespace.Root,
    q = b__namespace.forwardRef(
        ({className : e, ...t}, o) => jsxRuntime.jsx(
            d__namespace.Item, {ref : o, className : a("border-b", e), ...t}));
q.displayName = "AccordionItem";
var X = b__namespace.forwardRef(({className : e, children : t, ...o},
                                 n) => jsxRuntime.jsx(d__namespace.Header, {
  className : "flex",
  children : jsxRuntime.jsxs(d__namespace.Trigger, {
    ref : n,
    className : a(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        e),
    ...o,
    children : [
      t, jsxRuntime.jsx(
             lucideReact.ChevronDown,
             {className : "h-4 w-4 shrink-0 transition-transform duration-200"})
    ]
  })
}));
X.displayName = d__namespace.Trigger.displayName;
var J = b__namespace.forwardRef(({className : e, children : t, ...o},
                                 n) => jsxRuntime.jsx(d__namespace.Content, {
  ref : n,
  className :
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  ...o,
  children :
      jsxRuntime.jsx("div", {className : a("pb-4 pt-0", e), children : t})
}));
J.displayName = d__namespace.Content.displayName;
var Bt = classVarianceAuthority.cva(
        "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
        {
          variants : {
            variant : {
              default : "bg-background text-foreground",
              destructive :
                  "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
            }
          },
          defaultVariants : {variant : "default"}
        }),
    K = b__namespace.forwardRef(({className : e, variant : t, ...o}, n) =>
                                    jsxRuntime.jsx("div", {
                                      ref : n,
                                      role : "alert",
                                      className : a(Bt({variant : t}), e),
                                      ...o
                                    }));
K.displayName = "Alert";
var Q =
    b__namespace.forwardRef(({className : e, ...t}, o) => jsxRuntime.jsx("h5", {
      ref : o,
      className : a("mb-1 font-medium leading-none tracking-tight", e),
      ...t
    }));
Q.displayName = "AlertTitle";
var Y = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "div",
        {ref : o, className : a("text-sm [&_p]:leading-relaxed", e), ...t}));
Y.displayName = "AlertDescription";
var rt = s__namespace.Root, nt = s__namespace.Trigger, $ = s__namespace.Portal,
    I = b__namespace.forwardRef(({className : e, ...t},
                                 o) => jsxRuntime.jsx(s__namespace.Overlay, {
      className : a(
          "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          e),
      ...t,
      ref : o
    }));
I.displayName = s__namespace.Overlay.displayName;
var j = b__namespace.forwardRef(({className : e, ...t},
                                 o) => jsxRuntime.jsxs($, {
  children : [
    jsxRuntime.jsx(I, {}), jsxRuntime.jsx(s__namespace.Content, {
      ref : o,
      className : a(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e),
      ...t
    })
  ]
}));
j.displayName = s__namespace.Content.displayName;
var ee = ({className : e, ...t}) => jsxRuntime.jsx("div", {
  className : a("flex flex-col space-y-2 text-center sm:text-left", e),
  ...t
});
ee.displayName = "AlertDialogHeader";
var te = ({className : e, ...t}) => jsxRuntime.jsx("div", {
  className :
      a("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
  ...t
});
te.displayName = "AlertDialogFooter";
var oe = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        s__namespace.Title,
        {ref : o, className : a("text-lg font-semibold", e), ...t}));
oe.displayName = s__namespace.Title.displayName;
var ae = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        s__namespace.Description,
        {ref : o, className : a("text-sm text-muted-foreground", e), ...t}));
ae.displayName = s__namespace.Description.displayName;
var ie = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        s__namespace.Action, {ref : o, className : a(v(), e), ...t}));
ie.displayName = s__namespace.Action.displayName;
var re = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(s__namespace.Cancel, {
      ref : o,
      className : a(v({variant : "outline"}), "mt-2 sm:mt-0", e),
      ...t
    }));
re.displayName = s__namespace.Cancel.displayName;
var lt = st__namespace.Root;
var ne = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(R__namespace.Root, {
      ref : o,
      className :
          a("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }));
ne.displayName = R__namespace.Root.displayName;
var se = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        R__namespace.Image,
        {ref : o, className : a("aspect-square h-full w-full", e), ...t}));
se.displayName = R__namespace.Image.displayName;
var le = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(R__namespace.Fallback, {
  ref : o,
  className :
      a("flex h-full w-full items-center justify-center rounded-full bg-muted",
        e),
  ...t
}));
le.displayName = R__namespace.Fallback.displayName;
var Ft = classVarianceAuthority.cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants : {
        variant : {
          default :
              "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary :
              "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive :
              "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline : "text-foreground"
        }
      },
      defaultVariants : {variant : "default"}
    });
function mt({className : e, variant : t, ...o}) {
  return jsxRuntime.jsx("div", {className : a(Ft({variant : t}), e), ...o})
}
function de({className : e, classNames : t, showOutsideDays : o = !0, ...n}) {
  return jsxRuntime.jsx(reactDayPicker.DayPicker, {
    showOutsideDays : o,
    className : a("p-3", e),
    classNames : {
      months : "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
      month : "space-y-4",
      caption : "flex justify-center pt-1 relative items-center",
      caption_label : "text-sm font-medium",
      nav : "space-x-1 flex items-center",
      nav_button : a(v({variant : "outline"}),
                     "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
      nav_button_previous : "absolute left-1",
      nav_button_next : "absolute right-1",
      table : "w-full border-collapse space-y-1",
      head_row : "flex",
      head_cell :
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
      row : "flex w-full mt-2",
      cell :
          "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day : a(v({variant : "ghost"}),
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
      day_range_end : "day-range-end",
      day_selected :
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today : "bg-accent text-accent-foreground",
      day_outside :
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      day_disabled : "text-muted-foreground opacity-50",
      day_range_middle :
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden : "invisible",
      ...t
    },
    components : {
      IconLeft : ({...u}) =>
          jsxRuntime.jsx(lucideReact.ChevronLeft, {className : "h-4 w-4"}),
      IconRight : ({...u}) =>
          jsxRuntime.jsx(lucideReact.ChevronRight, {className : "h-4 w-4"})
    },
    ...n
  })
}
de.displayName = "Calendar";
var pe = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx("div", {
  ref : o,
  className : a("rounded-lg border bg-card text-card-foreground shadow-sm", e),
  ...t
}));
pe.displayName = "Card";
var fe = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "div",
        {ref : o, className : a("flex flex-col space-y-1.5 p-6", e), ...t}));
fe.displayName = "CardHeader";
var ue =
    b__namespace.forwardRef(({className : e, ...t}, o) => jsxRuntime.jsx("h3", {
      ref : o,
      className : a("text-2xl font-semibold leading-none tracking-tight", e),
      ...t
    }));
ue.displayName = "CardTitle";
var ve = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "p",
        {ref : o, className : a("text-sm text-muted-foreground", e), ...t}));
ve.displayName = "CardDescription";
var ge = b__namespace.forwardRef(
    ({className : e, ...t}, o) =>
        jsxRuntime.jsx("div", {ref : o, className : a("p-6 pt-0", e), ...t}));
ge.displayName = "CardContent";
var Re = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "div",
        {ref : o, className : a("flex items-center p-6 pt-0", e), ...t}));
Re.displayName = "CardFooter";
var Pe = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(S__namespace.Root, {
  ref : o,
  className : a(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e),
  ...t,
  children : jsxRuntime.jsx(S__namespace.Indicator, {
    className : a("flex items-center justify-center text-current"),
    children : jsxRuntime.jsx(lucideReact.Check, {className : "h-4 w-4"})
  })
}));
Pe.displayName = S__namespace.Root.displayName;
var we = ({className : e, ...t}) => jsxRuntime.jsx("nav", {
  role : "navigation",
  "aria-label" : "pagination",
  className : a("mx-auto flex w-full justify-center", e),
  ...t
});
we.displayName = "Pagination";
var Zt = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "ul",
        {ref : o, className : a("flex flex-row items-center gap-1", e), ...t}));
Zt.displayName = "PaginationContent";
var Te =
    b__namespace.forwardRef(({className : e, ...t}, o) => jsxRuntime.jsx(
                                "li", {ref : o, className : a("", e), ...t}));
Te.displayName = "PaginationItem";
var dt = r__namespace.Root, pt = r__namespace.Trigger;
var io = b__namespace.forwardRef(({
                                   className : e,
                                   inset : t,
                                   children : o,
                                   ...n
                                 },
                                  u) => jsxRuntime.jsxs(r__namespace.SubTrigger, {
  ref : u,
  className : a(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8", e),
  ...n,
  children : [
    o, jsxRuntime.jsx(lucideReact.ChevronRight, {className : "ml-auto h-4 w-4"})
  ]
}));
io.displayName = r__namespace.SubTrigger.displayName;
var ro = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(r__namespace.SubContent, {
  ref : o,
  className : a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e),
  ...t
}));
ro.displayName = r__namespace.SubContent.displayName;
var Ne = b__namespace.forwardRef(({className : e, sideOffset : t = 4, ...o},
                                  n) => jsxRuntime.jsx(r__namespace.Portal, {
  children : jsxRuntime.jsx(r__namespace.Content, {
    ref : n,
    sideOffset : t,
    className : a(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e),
    ...o
  })
}));
Ne.displayName = r__namespace.Content.displayName;
var Ce = b__namespace.forwardRef(({className : e, inset : t, ...o},
                                  n) => jsxRuntime.jsx(r__namespace.Item, {
  ref : n,
  className : a(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8", e),
  ...o
}));
Ce.displayName = r__namespace.Item.displayName;
var no = b__namespace.forwardRef(({
                                   className : e,
                                   children : t,
                                   checked : o,
                                   ...n
                                 },
                                  u) => jsxRuntime.jsxs(r__namespace.CheckboxItem, {
  ref : u,
  className : a(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e),
  checked : o,
  ...n,
  children : [
    jsxRuntime.jsx("span", {
      className :
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children : jsxRuntime.jsx(r__namespace.ItemIndicator, {
        children : jsxRuntime.jsx(lucideReact.Check, {className : "h-4 w-4"})
      })
    }),
    t
  ]
}));
no.displayName = r__namespace.CheckboxItem.displayName;
var so = b__namespace.forwardRef(({className : e, children : t, ...o},
                                  n) => jsxRuntime.jsxs(r__namespace.RadioItem, {
  ref : n,
  className : a(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e),
  ...o,
  children : [
    jsxRuntime.jsx("span", {
      className :
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children : jsxRuntime.jsx(r__namespace.ItemIndicator, {
        children : jsxRuntime.jsx(lucideReact.Circle,
                                  {className : "h-2 w-2 fill-current"})
      })
    }),
    t
  ]
}));
so.displayName = r__namespace.RadioItem.displayName;
var lo = b__namespace.forwardRef(({className : e, inset : t, ...o},
                                  n) => jsxRuntime.jsx(r__namespace.Label, {
  ref : n,
  className : a("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
  ...o
}));
lo.displayName = r__namespace.Label.displayName;
var mo = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        r__namespace.Separator,
        {ref : o, className : a("-mx-1 my-1 h-px bg-muted", e), ...t}));
mo.displayName = r__namespace.Separator.displayName;
var Ae = b__namespace.forwardRef(({className : e, type : t, ...o},
                                  n) => jsxRuntime.jsx("input", {
  type : t,
  className : a(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e),
  ref : n,
  ...o
}));
Ae.displayName = "Input";
var vt = i__namespace.Root, gt = i__namespace.Group, Rt = i__namespace.Value,
    Me = b__namespace.forwardRef(({className : e, children : t, ...o},
                                  n) => jsxRuntime.jsxs(i__namespace.Trigger, {
      ref : n,
      className : a(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
          e),
      ...o,
      children : [
        t, jsxRuntime.jsx(i__namespace.Icon, {
          asChild : !0,
          children : jsxRuntime.jsx(lucideReact.ChevronDown,
                                    {className : "h-4 w-4 opacity-50"})
        })
      ]
    }));
Me.displayName = i__namespace.Trigger.displayName;
var V = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(i__namespace.ScrollUpButton, {
      ref : o,
      className : a("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children : jsxRuntime.jsx(lucideReact.ChevronUp, {className : "h-4 w-4"})
    }));
V.displayName = i__namespace.ScrollUpButton.displayName;
var z = b__namespace.forwardRef(
    ({className : e, ...t},
     o) => jsxRuntime.jsx(i__namespace.ScrollDownButton, {
      ref : o,
      className : a("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children :
          jsxRuntime.jsx(lucideReact.ChevronDown, {className : "h-4 w-4"})
    }));
z.displayName = i__namespace.ScrollDownButton.displayName;
var Se = b__namespace.forwardRef(({
                                   className : e,
                                   children : t,
                                   position : o = "popper",
                                   ...n
                                 },
                                  u) => jsxRuntime.jsx(i__namespace.Portal, {
  children : jsxRuntime.jsxs(i__namespace.Content, {
    ref : u,
    className : a(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        o === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e),
    position : o,
    ...n,
    children : [
      jsxRuntime.jsx(V, {}), jsxRuntime.jsx(i__namespace.Viewport, {
        className : a(
            "p-1",
            o === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
        children : t
      }),
      jsxRuntime.jsx(z, {})
    ]
  })
}));
Se.displayName = i__namespace.Content.displayName;
var Le = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(i__namespace.Label, {
      ref : o,
      className : a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
      ...t
    }));
Le.displayName = i__namespace.Label.displayName;
var He = b__namespace.forwardRef(({className : e, children : t, ...o},
                                  n) => jsxRuntime.jsxs(i__namespace.Item, {
  ref : n,
  className : a(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e),
  ...o,
  children : [
    jsxRuntime.jsx("span", {
      className :
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children : jsxRuntime.jsx(i__namespace.ItemIndicator, {
        children : jsxRuntime.jsx(lucideReact.Check, {className : "h-4 w-4"})
      })
    }),
    jsxRuntime.jsx(i__namespace.ItemText, {children : t})
  ]
}));
He.displayName = i__namespace.Item.displayName;
var Ee = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        i__namespace.Separator,
        {ref : o, className : a("-mx-1 my-1 h-px bg-muted", e), ...t}));
Ee.displayName = i__namespace.Separator.displayName;
var Ie = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx("textarea", {
  className : a(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e),
  ref : o,
  ...t
}));
Ie.displayName = "Textarea";
var Ro = classVarianceAuthority.cva(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    Ve = b__namespace.forwardRef(
        ({className : e, ...t}, o) => jsxRuntime.jsx(
            We__namespace.Root, {ref : o, className : a(Ro(), e), ...t}));
Ve.displayName = We__namespace.Root.displayName;
var yt = p__namespace.Root,
    ze = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(p__namespace.List, {
      ref : o,
      className : a(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          e),
      ...t
    }));
ze.displayName = p__namespace.List.displayName;
var Be = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(p__namespace.Trigger, {
  ref : o,
  className : a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e),
  ...t
}));
Be.displayName = p__namespace.Trigger.displayName;
var Ge = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(p__namespace.Content, {
  ref : o,
  className : a(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e),
  ...t
}));
Ge.displayName = p__namespace.Content.displayName;
function wt({className : e, ...t}) {
  return jsxRuntime.jsx(
      "div", {className : a("animate-pulse rounded-md bg-muted", e), ...t})
}
var Fe = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(L__namespace.Root, {
  className : a(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e),
  ...t,
  ref : o,
  children : jsxRuntime.jsx(L__namespace.Thumb, {
    className : a(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
  })
}));
Fe.displayName = L__namespace.Root.displayName;
var Oe = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx("div", {
      className : "relative w-full overflow-auto",
      children : jsxRuntime.jsx(
          "table",
          {ref : o, className : a("w-full caption-bottom text-sm", e), ...t})
    }));
Oe.displayName = "Table";
var Ue = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "thead", {ref : o, className : a("[&_tr]:border-b", e), ...t}));
Ue.displayName = "TableHeader";
var qe = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        "tbody",
        {ref : o, className : a("[&_tr:last-child]:border-0", e), ...t}));
qe.displayName = "TableBody";
var Xe = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx("tfoot", {
  ref : o,
  className : a("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
  ...t
}));
Xe.displayName = "TableFooter";
var Je = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx("tr", {
  ref : o,
  className : a(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e),
  ...t
}));
Je.displayName = "TableRow";
var Ke = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx("th", {
  ref : o,
  className : a(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e),
  ...t
}));
Ke.displayName = "TableHead";
var Qe =
    b__namespace.forwardRef(({className : e, ...t}, o) => jsxRuntime.jsx("td", {
      ref : o,
      className : a("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
      ...t
    }));
Qe.displayName = "TableCell";
var Ye = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx("caption", {
      ref : o,
      className : a("mt-4 text-sm text-muted-foreground", e),
      ...t
    }));
Ye.displayName = "TableCaption";
var xt = l__namespace.Provider,
    Ze = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(l__namespace.Viewport, {
      ref : o,
      className : a(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
          e),
      ...t
    }));
Ze.displayName = l__namespace.Viewport.displayName;
var To = classVarianceAuthority.cva(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
          variants : {
            variant : {
              default : "border bg-background text-foreground",
              destructive :
                  "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
          },
          defaultVariants : {variant : "default"}
        }),
    $e = b__namespace.forwardRef(
        ({className : e, variant : t, ...o}, n) => jsxRuntime.jsx(
            l__namespace.Root,
            {ref : n, className : a(To({variant : t}), e), ...o}));
$e.displayName = l__namespace.Root.displayName;
var je = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(l__namespace.Action, {
  ref : o,
  className : a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e),
  ...t
}));
je.displayName = l__namespace.Action.displayName;
var et = b__namespace.forwardRef(({className : e, ...t},
                                  o) => jsxRuntime.jsx(l__namespace.Close, {
  ref : o,
  className : a(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e),
  "toast-close" : "",
  ...t,
  children : jsxRuntime.jsx(lucideReact.X, {className : "h-4 w-4"})
}));
et.displayName = l__namespace.Close.displayName;
var tt = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        l__namespace.Title,
        {ref : o, className : a("text-sm font-semibold", e), ...t}));
tt.displayName = l__namespace.Title.displayName;
var ot = b__namespace.forwardRef(
    ({className : e, ...t}, o) => jsxRuntime.jsx(
        l__namespace.Description,
        {ref : o, className : a("text-sm opacity-90", e), ...t}));
ot.displayName = l__namespace.Description.displayName;
var Nt = ({...e}) => {
  let {theme : t = "system"} = nextThemes.useTheme();
  return jsxRuntime.jsx(sonner.Toaster, {
    theme : t,
    className : "toaster group",
    toastOptions : {
      classNames : {
        toast :
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description : "group-[.toast]:text-muted-foreground",
        actionButton :
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton :
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
      }
    },
    ...e
  })
};
var Ct = ({className : e, ...t}) => jsxRuntime.jsx(A__namespace.PanelGroup, {
  className :
      a("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
  ...t
}),
    Dt = A__namespace.Panel,
    At = ({withHandle : e,
           className : t,
           ...o}) => jsxRuntime.jsx(A__namespace.PanelResizeHandle, {
      className : a(
          "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
          t),
      ...o,
      children : e && jsxRuntime.jsx("div", {
        className :
            "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
        children : jsxRuntime.jsx(lucideReact.GripVertical,
                                  {className : "h-2.5 w-2.5"})
      })
    });
var Ao = {
  RadioGroup : F,
  RadioGroupItem : O,
  Button : U,
  Accordion : it,
  AccordionContent : J,
  AccordionItem : q,
  AccordionTrigger : X,
  Alert : K,
  AlertDescription : Y,
  AlertTitle : Q,
  AlertDialog : rt,
  AlertDialogContent : j,
  AlertDialogFooter : te,
  AlertDialogHeader : ee,
  AlertDialogTitle : oe,
  AlertDialogTrigger : nt,
  AlertDialogAction : ie,
  AlertDialogCancel : re,
  AlertDialogDescription : ae,
  AlertDialogOverlay : I,
  AlertDialogPortal : $,
  AspectRatio : lt,
  Avatar : ne,
  AvatarFallback : le,
  AvatarImage : se,
  Badge : mt,
  Calendar : de,
  Card : pe,
  CardContent : ge,
  CardDescription : ve,
  CardFooter : Re,
  CardHeader : fe,
  CardTitle : ue,
  Checkbox : Pe,
  Pagination : we,
  PaginationItem : Te,
  DropdownMenu : dt,
  DropdownMenuContent : Ne,
  DropdownMenuItem : Ce,
  DropdownMenuTrigger : pt,
  Input : Ae,
  Select : vt,
  SelectContent : Se,
  SelectGroup : gt,
  SelectItem : He,
  SelectLabel : Le,
  SelectScrollDownButton : z,
  SelectScrollUpButton : V,
  SelectSeparator : Ee,
  SelectTrigger : Me,
  SelectValue : Rt,
  Textarea : Ie,
  Label : Ve,
  Tabs : yt,
  TabsContent : Ge,
  TabsList : ze,
  TabsTrigger : Be,
  Skeleton : wt,
  Switch : Fe,
  Table : Oe,
  TableBody : qe,
  TableCell : Qe,
  TableHead : Ke,
  TableHeader : Ue,
  TableRow : Je,
  TableCaption : Ye,
  TableFooter : Xe,
  Toast : $e,
  ToastAction : je,
  ToastClose : et,
  ToastDescription : ot,
  ToastProvider : xt,
  ToastTitle : tt,
  ToastViewport : Ze,
  Toaster : Nt,
  Image : Do__default.default,
  ResizableHandle : At,
  ResizablePanel : Dt,
  ResizablePanelGroup : Ct
},
    _i = Ao;

module.exports = _i;
