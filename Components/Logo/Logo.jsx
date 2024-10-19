import Image from 'next/image';
import {CgUserlane} from 'react-icons/cg';
import {ContactUS} from './ContactUS';
import {Drawer, DrawerContent, DrawerTrigger} from '@/components/ui/drawer';


export const Logo = () => {
  return (
      <>
        <div className="w-full flex flex-col items-center relative">
          <div
              className="w-[160px] h-[160px] rounded-full overflow-hidden bg-primary/20">
            <Image
                src={'images/sabz.jpg'}
                width={0}
                height={0}
                className="w-full h-full"
                alt="logo"
            />
          </div>
          <Drawer>
            <DrawerTrigger asChild>
              <div
                  className="w-10 h-10 absolute top-2 left-0 bg-primary/20 backdrop-blur shadow-lg hover:shadow-xl rounded-md  flex items-center justify-center transition-all duration-150 cursor-pointer"
              >
                <CgUserlane className="text-[20px] text-primaryDark"/>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <ContactUS/>
            </DrawerContent>
          </Drawer>
        </div>
      </>
  );
};
